(import 'influxdb.libsonnet') +
{
  local container = $.core.v1.container,
  local containerPort = $.core.v1.containerPort,
  local deployment = $.apps.v1.deployment,
  local envVar = $.core.v1.envVar,
  local volume = $.core.v1.volume,
  local volumeMount = $.core.v1.volumeMount,

  influxDB+: {
    local this = self,
    deployables+: {
      container:: container.new(this.name, this.image)
        + container.withPorts([containerPort.newNamed(this.ports.internal, 'http') + containerPort.withProtocol('TCP')])
        + container.withEnv([
          envVar.new('DOCKER_INFLUXDB_INIT_BUCKET', this.bucket),
          envVar.new('DOCKER_INFLUXDB_INIT_MODE', 'setup'),
          envVar.new('DOCKER_INFLUXDB_INIT_ORG', this.organisation),
          envVar.new('DOCKER_INFLUXDB_INIT_RETENTION', this.retention),
          envVar.fromSecretRef('DOCKER_INFLUXDB_INIT_ADMIN_TOKEN', this.name, 'token'),
          envVar.fromSecretRef('DOCKER_INFLUXDB_INIT_USERNAME', this.name, 'username'),
          envVar.fromSecretRef('DOCKER_INFLUXDB_INIT_PASSWORD', this.name, 'password'),
        ])
        + container.withVolumeMounts([
          volumeMount.new(this.name, '/var/lib/influxdb2'),
        ])
        + container.resources.withRequests({cpu: this.resources.cpu.request, memory: this.resources.memory.request})
        + container.resources.withLimits({cpu: this.resources.cpu.limit, memory: this.resources.memory.limit})
        + container.livenessProbe.withPeriodSeconds(60)
        + container.livenessProbe.httpGet.withPath('/health')
        + container.livenessProbe.httpGet.withPort(this.ports.internal)
        + container.readinessProbe.httpGet.withPath('/health')
        + container.readinessProbe.httpGet.withPort(this.ports.internal)
        + container.startupProbe.httpGet.withPath('/health')
        + container.startupProbe.httpGet.withPort(this.ports.internal)
        + container.startupProbe.withFailureThreshold(30)
        + container.startupProbe.withPeriodSeconds(10),
      deployment: deployment.new(name = this.name, containers = [this.deployables.container], replicas = 1)
        + deployment.metadata.withAnnotations(this.annotations.deployment)
        + deployment.metadata.withLabels(this.labels.deployment)
        + deployment.spec.selector.withMatchLabels(this.labels.selector)
        + deployment.spec.template.metadata.withAnnotations(this.annotations.pod)
        + deployment.spec.template.metadata.withLabels(this.labels.pod + this.labels.selector)
        + deployment.spec.template.spec.withServiceAccount(this.name)
        + deployment.spec.template.spec.withTerminationGracePeriodSeconds(60)
        + deployment.spec.template.spec.withVolumes([
          volume.fromPersistentVolumeClaim(this.name, 'observability-' + this.name)
        ]),
    },
  },
}
