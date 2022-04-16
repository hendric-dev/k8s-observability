(import 'influxdb.libsonnet') +
{
  local secret = $.core.v1.secret,

  influxDB+: {
    local this = self,
    secret: secret.new(this.name, {
      username: std.base64(this.secrets.username),
      password: std.base64(this.secrets.password),
    })
    + secret.metadata.withLabels(this.labels.selector),
  },
}
