(import 'vector.libsonnet') +
{
  local secret = $.core.v1.secret,

  vector+: {
    local this = self,
    secret+: {
      influxDBToken: secret.new('vector-influx-db-token', {
        token: std.base64(this.secrets.monitoring.influxDBToken),
      })
      + secret.metadata.withLabels(this.labels.selector),
      serviceAccountToken: secret.new('vector-service-account-token', {}, 'kubernetes.io/service-account-token')
      + secret.metadata.withAnnotations({'kubernetes.io/service-account.name': this.name})
      + secret.metadata.withLabels(this.labels.selector),
    },
  },
}
