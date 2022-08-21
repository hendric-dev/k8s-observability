(import 'grafana.libsonnet') +
{
  local configMap = $.core.v1.configMap,

  grafana+: {
    local this = self,

    local datasources = {
      logs: std.parseYaml(importstr '../../config/datasources/logs.yaml') + {
        url: 'http://' + $.loki.name + ':' + $.loki.ports.external,
      },
      metrics: std.parseYaml(importstr '../../config/datasources/metrics.yaml') + {
        jsonData+: {
          defaultBucket: $.influxDB.bucket,
          organization: $.influxDB.organisation,
        },
        url: 'http://' + $.influxDB.name + ':' + $.influxDB.ports.external,
      },
    },

    configmap: {
      datasources: configMap.new(this.name + '-datasources', {
        'datasources.yaml': std.manifestYamlDoc({apiVersion: 1, datasources: [datasources.logs, datasources.metrics]}),
      })
        + configMap.metadata.withLabels($.grafana.labels.selector),
      dashboards: configMap.new(this.name + '-dashboards', {
        'dashboards.yaml': (importstr '../../config/dashboards.yaml'),
        'kubernetes-node-resources.json': (importstr '../../dashboards/kubernetes-node-resources.json'),
        'kubernetes-pod-resources.json': (importstr '../../dashboards/kubernetes-pod-resources.json'),
      }) + configMap.metadata.withLabels(this.labels.selector),
      grafana: configMap.new(this.name, {
        'grafana.ini': (importstr '../../config/grafana.ini'),
      }) + configMap.metadata.withLabels(this.labels.selector),
    }
  },
}
