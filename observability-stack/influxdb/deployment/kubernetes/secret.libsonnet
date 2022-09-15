(import 'influxdb.libsonnet') +
{
  local secret = $.core.v1.secret,

  influxDB+: {
    local this = self,
    deployables+: {
      secret: secret.new(this.name, {
        username: std.base64(this.secrets.username),
        password: std.base64(this.secrets.password),
        token: std.base64(this.secrets.token),
      })
      + secret.metadata.withLabels(this.labels.selector),
    },
  },
}
