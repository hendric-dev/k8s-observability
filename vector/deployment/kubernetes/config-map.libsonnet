(import 'vector.libsonnet') +
{
  local configMap = $.core.v1.configMap,

  vector+: {
    local this = self,
    configMap: configMap.new(this.name,
      {
        'vector.toml': (importstr '../../config/vector.toml')
          + (importstr '../../config/node-metrics/cpu.toml')
          + (importstr '../../config/node-metrics/index.toml')
          + (importstr '../../config/node-metrics/memory.toml')
          + (importstr '../../config/node-metrics/network.toml'),
      })
      + configMap.metadata.withLabels(this.labels.selector),
  },
}
