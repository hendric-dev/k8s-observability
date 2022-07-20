(import 'vector.libsonnet') +
{
  local configMap = $.core.v1.configMap,

  vector+: {
    local this = self,
    configMap: configMap.new(this.name,
      {
        'vector.toml': (importstr '../../config/vector.toml')
          + (importstr '../../config/metrics/resources/container/cpu.toml')
          + (importstr '../../config/metrics/resources/container/index.toml')
          + (importstr '../../config/metrics/resources/container/memory.toml')
          + (importstr '../../config/metrics/resources/container/network.toml')
          + (importstr '../../config/metrics/resources/host/index.toml'),
      })
      + configMap.metadata.withLabels(this.labels.selector),
  },
}
