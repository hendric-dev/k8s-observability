(import 'grafana.libsonnet') +
{
  local secret = $.core.v1.secret,

  grafana+: {
    local this = self,
    deployables+: {
      secrets: {
        grafana:
          secret.new(this.name, {
            admin_username: std.base64(this.secrets.admin.username),
            admin_password: std.base64(this.secrets.admin.password),
          })
          + secret.metadata.withLabels(this.labels.selector),
        influxDB:
          secret.new(this.name + '-influx-db-token', {
            token: std.base64($.influxDB.secrets.token),
          })
          + secret.metadata.withLabels(this.labels.selector),
      },
    },
  },
}
