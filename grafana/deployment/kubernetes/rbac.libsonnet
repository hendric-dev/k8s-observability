(import 'grafana.libsonnet') +
{
  local serviceAccount = $.core.v1.serviceAccount,

  grafana+: {
    local this = self,
    serviceAccount: serviceAccount.new(this.name)
      + serviceAccount.metadata.withLabels(this.labels.selector)
      + serviceAccount.withAutomountServiceAccountToken(true),
  },
}
