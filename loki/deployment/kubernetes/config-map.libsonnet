(import 'loki.libsonnet') +
{
  local configMap = $.core.v1.configMap,

  loki+: {
    local this = self,
    configMap: configMap.new(this.name,
      {
        'local-config.yaml': (importstr '../../config/loki.yaml')
      })
      + configMap.metadata.withLabels(this.labels.selector),
  },
}
