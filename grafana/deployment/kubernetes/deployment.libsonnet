(import 'grafana.libsonnet') +
{
  local container = $.core.v1.container,
  local containerPort = $.core.v1.containerPort,
  local deployment = $.apps.v1.deployment,
  local envVar = $.core.v1.envVar,
  local volume = $.core.v1.volume,
  local volumeMount = $.core.v1.volumeMount,

  grafana+: {
    local this = self,
    container:: container.new(this.name, this.image)
      + container.withPorts([containerPort.newNamed(this.ports.internal, 'http')])
      + container.withEnv([
        envVar.fromSecretRef('GF_SECURITY_ADMIN_USER', this.name, 'admin_username'),
        envVar.fromSecretRef('GF_SECURITY_ADMIN_PASSWORD', this.name, 'admin_password'),
        envVar.fromSecretRef('INFLUX_API_TOKEN', this.name + '-influx-db-token', 'token'),
      ])
      + container.resources.withRequests({cpu: this.resources.cpu.request, memory: this.resources.memory.request})
      + container.resources.withLimits({cpu: this.resources.cpu.limit, memory: this.resources.memory.limit})
      + container.withVolumeMounts([
        volumeMount.new('config', '/etc/grafana/grafana.ini', true) + volumeMount.withSubPath('grafana.ini'),
        volumeMount.new('dashboards', '/var/lib/grafana/dashboards', true),
        volumeMount.new('dashboards', '/etc/grafana/provisioning/dashboards/dashboards.yaml', true)
        + volumeMount.withSubPath('dashboards.yaml'),
        volumeMount.new('datasources', '/etc/grafana/provisioning/datasources', true),
      ]),
    deployment: deployment.new(name = this.name, containers = [this.container], replicas = 1)
      + deployment.metadata.withAnnotations(this.annotations.deployment)
      + deployment.metadata.withLabels(this.labels.deployment)
      + deployment.spec.selector.withMatchLabels(this.labels.selector)
      + deployment.spec.template.metadata.withAnnotations(this.annotations.pod)
      + deployment.spec.template.metadata.withLabels(this.labels.pod + this.labels.selector)
      + deployment.spec.template.spec.withVolumes([
        volume.fromConfigMap('config', this.name),
        volume.fromConfigMap('dashboards', this.name + '-dashboards'),
        volume.fromConfigMap('datasources', this.name + '-datasources'),
      ]),
  },
}
