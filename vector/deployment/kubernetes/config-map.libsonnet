(import 'vector.libsonnet') +
{
  local configMap = $.core.v1.configMap,

  vector+: {
    local this = self,
    configMap: configMap.new(this.name,
      {
        'vector.toml': (importstr '../../config/vector.toml')
          + (importstr '../../config/host-metrics/cpu.toml')
          + (importstr '../../config/host-metrics/filesystem.toml')
          + (importstr '../../config/host-metrics/host_metrics.toml')
          + (importstr '../../config/host-metrics/memory.toml')
          + (importstr '../../config/host-metrics/network.toml'),
      })
      + configMap.metadata.withLabels(this.labels.selector),
  },
}
