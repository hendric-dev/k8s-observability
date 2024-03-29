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
    deployables+: {
      container::
        container.new(this.name, this.image)
        + container.withEnv(
          [
            envVar.fromSecretRef('GF_SECURITY_ADMIN_USER', this.name, 'admin_username'),
            envVar.fromSecretRef('GF_SECURITY_ADMIN_PASSWORD', this.name, 'admin_password'),
            envVar.fromSecretRef('INFLUX_API_TOKEN', this.name + '-influx-db-token', 'token'),
          ]
          + [envVar.new(name, std.toString(this.env[name])) for name in std.objectFields(this.env)],
        )
        + container.withPorts([containerPort.newNamed(this.ports.internal, 'http')])
        + container.withVolumeMounts([
          volumeMount.new('config', '/etc/grafana/grafana.ini', true) + volumeMount.withSubPath('grafana.ini'),
          volumeMount.new('dashboards', '/var/lib/grafana/dashboards', true),
          volumeMount.new('dashboards', '/etc/grafana/provisioning/dashboards/dashboards.yaml', true)
          + volumeMount.withSubPath('dashboards.yaml'),
          volumeMount.new('datasources', '/etc/grafana/provisioning/datasources', true),
          volumeMount.new(this.name, '/var/lib/grafana') + volumeMount.withSubPath('grafana'),
        ])
        + container.resources.withRequests({ cpu: this.resources.cpu.request, memory: this.resources.memory.request })
        + container.resources.withLimits({ cpu: this.resources.cpu.limit, memory: this.resources.memory.limit })
        + container.livenessProbe.withPeriodSeconds(60)
        + container.livenessProbe.httpGet.withPath('/api/health')
        + container.livenessProbe.httpGet.withPort(this.ports.internal)
        + container.readinessProbe.httpGet.withPath('/api/health')
        + container.readinessProbe.httpGet.withPort(this.ports.internal)
        + container.startupProbe.httpGet.withPath('/api/health')
        + container.startupProbe.httpGet.withPort(this.ports.internal)
        + container.startupProbe.withInitialDelaySeconds(60)
        + container.startupProbe.withPeriodSeconds(10),
      initContainer::
        container.new(this.name + '-setup-permissions', this.image)
        + container.withCommand(['chown', '-R', 'grafana:root', '/grafana'])
        + container.withVolumeMounts([
          volumeMount.new(this.name, '/grafana') + volumeMount.withSubPath('grafana'),
        ])
        + container.securityContext.withRunAsUser(0),
      deployment:
        deployment.new(name=this.name, containers=[this.deployables.container], replicas=1)
        + deployment.metadata.withAnnotations(this.annotations.deployment)
        + deployment.metadata.withLabels(this.labels.deployment)
        + deployment.spec.selector.withMatchLabels(this.labels.selector)
        + deployment.spec.template.metadata.withAnnotations(this.annotations.pod)
        + deployment.spec.template.metadata.withLabels(this.labels.pod + this.labels.selector)
        + deployment.spec.template.spec.withInitContainers([this.deployables.initContainer])
        + deployment.spec.template.spec.withServiceAccount(this.name)
        + deployment.spec.template.spec.withVolumes([
          volume.fromConfigMap('config', this.name),
          volume.fromConfigMap('dashboards', this.name + '-dashboards'),
          volume.fromConfigMap('datasources', this.name + '-datasources'),
          volume.fromPersistentVolumeClaim(this.name, $.shared.storage.name),
        ]),
    },
  },
}
