(import 'vector.libsonnet') +
{
  local configMap = $.core.v1.configMap,

  vector+: {
    local this = self,
    deployables+: {
      configMap: configMap.new(this.name,
        {
          'vector.toml': (importstr '../../config/vector.toml')
            + (importstr '../../config/logs/kubernetes/index.toml')
            + (importstr '../../config/metrics/default-metrics-aggregator.toml')
            + (importstr '../../config/metrics/resources/container/cpu.toml')
            + (importstr '../../config/metrics/resources/container/index.toml')
            + (importstr '../../config/metrics/resources/container/memory.toml')
            + (importstr '../../config/metrics/resources/host/filesystem.toml')
            + (importstr '../../config/metrics/resources/host/host.toml')
            + (importstr '../../config/metrics/resources/host/index.toml')
            + (importstr '../../config/metrics/resources/host/load.toml')
            + (importstr '../../config/metrics/resources/host/memory.toml')
            + (importstr '../../config/metrics/resources/host/network.toml')
            + (importstr '../../config/metrics/vector/index.toml')
            + std.join('\n', this.logging.kubernetes.transformations)
            + std.join('\n', this.metrics.custom),
        })
        + configMap.metadata.withLabels(this.labels.selector),
    },
  },
}
