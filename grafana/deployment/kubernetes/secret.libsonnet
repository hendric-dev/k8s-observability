(import 'grafana.libsonnet') +
{
  local secret = $.core.v1.secret,

  grafana+: {
    local this = self,
    secret: secret.new(this.name, {
      admin_username: std.base64(this.secrets.admin.username),
      admin_password: std.base64(this.secrets.admin.password),
    })
    + secret.metadata.withLabels(this.labels.selector),
  },
}
