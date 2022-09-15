(import 'tempo.libsonnet') +
{
  local configMap = $.core.v1.configMap,

  tempo+: {
    local this = self,
    deployables+: {
      configMap: configMap.new(this.name, {'tempo.yaml': (importstr '../../config/tempo.yaml')})
        + configMap.metadata.withLabels(this.labels.selector),
    },
  },
}
