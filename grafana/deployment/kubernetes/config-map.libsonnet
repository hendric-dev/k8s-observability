(import 'grafana.libsonnet') +
{
  local configMap = $.core.v1.configMap,

  grafana+: {
    local this = self,

    local dashboards = [
      {
        name: dashboard.title,
        folder: dashboard.folder,
        type: 'file',
        options: {
          path: '/var/lib/grafana/dashboards/' + dashboard.file,
        },
      }
      for dashboard in this.dashboards
    ],

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
      traces: std.parseYaml(importstr '../../config/datasources/traces.yaml') + {
        url: 'http://' + $.tempo.name + ':' + $.tempo.ports.tempo.external,
      },
    },

    configMap: {
      datasources: configMap.new(this.name + '-datasources', {
        'datasources.yaml': std.manifestYamlDoc({
          apiVersion: 1,
          datasources: [datasource for datasource in std.objectFields(datasources)],
        }),
      }) + configMap.metadata.withLabels($.grafana.labels.selector),
      dashboards: configMap.new(this.name + '-dashboards',
        {'dashboards.yaml': std.manifestYamlDoc({apiVersion: 1, providers: dashboards})}
        + {[dashboard.file]: dashboard.definition for dashboard in this.dashboards}
      ) + configMap.metadata.withLabels(this.labels.selector),
      grafana: configMap.new(this.name, {
        'grafana.ini': (importstr '../../config/grafana.ini'),
      }) + configMap.metadata.withLabels(this.labels.selector),
    }
  },
}
