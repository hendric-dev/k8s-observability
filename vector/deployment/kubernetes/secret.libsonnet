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
    },
  },
}
