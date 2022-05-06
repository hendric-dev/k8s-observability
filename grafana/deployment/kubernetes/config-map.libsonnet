(import 'grafana.libsonnet') +
{
  local configMap = $.core.v1.configMap,

  grafana+: {
    local this = self,
    configmap: {
      datasources: configMap.new(this.name + '-datasources', {
        'datasources.yaml': (importstr '../../config/datasources.yaml') % $.influxDB,
      }) + configMap.metadata.withLabels($.grafana.labels.selector),
      dashboards: configMap.new(this.name + '-dashboards', {
        'dashboards.yaml': (importstr '../../config/dashboards.yaml'),
        'host-metrics.json': (importstr '../../dashboards/host-metrics.json'),
      }) + configMap.metadata.withLabels(this.labels.selector),
      grafana: configMap.new(this.name, {
        'grafana.ini': (importstr '../../config/grafana.ini'),
      }) + configMap.metadata.withLabels(this.labels.selector),
    }
  },
}
