(import 'vector.libsonnet') +
{
  local configMap = $.core.v1.configMap,

  vector+: {
    local this = self,
    configMap: configMap.new(this.name,
      {
        'vector.toml': (importstr '../../config/vector.toml')
          + (importstr '../../config/logs/kubernetes/aggregator.toml')
          + (importstr '../../config/logs/kubernetes/index.toml')
          + (importstr '../../config/metrics/resources/container/cpu.toml')
          + (importstr '../../config/metrics/resources/container/index.toml')
          + (importstr '../../config/metrics/resources/container/memory.toml')
          + (importstr '../../config/metrics/resources/container/network.toml')
          + (importstr '../../config/metrics/resources/host/filesystem.toml')
          + (importstr '../../config/metrics/resources/host/host.toml')
          + (importstr '../../config/metrics/resources/host/index.toml')
          + (importstr '../../config/metrics/resources/host/load.toml')
          + (importstr '../../config/metrics/resources/host/memory.toml')
          + (importstr '../../config/metrics/resources/host/network.toml'),
      })
      + configMap.metadata.withLabels(this.labels.selector),
  },
}
