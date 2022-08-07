(import 'loki.libsonnet') +
{
  local configMap = $.core.v1.configMap,

  loki+: {
    local this = self,

    local config = std.parseYaml(importstr '../../config.loki.yaml') + {
      limits_config+: {
        retention_period: this.retention,
      }
    },

    configMap: configMap.new(this.name, {'local-config.yaml': std.manifestYamlDoc(config)})
      + configMap.metadata.withLabels(this.labels.selector),
  },
}
