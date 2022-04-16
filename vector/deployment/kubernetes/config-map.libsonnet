(import 'vector.libsonnet') +
{
  local configMap = $.core.v1.configMap,

  vector+: {
    local this = self,
    configMap: configMap.new(this.name,
      {
        'vector.toml': (importstr '../../config/vector.toml')
      })
      + configMap.metadata.withLabels(this.labels.selector),
  },
}
