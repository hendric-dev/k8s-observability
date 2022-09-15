(import 'loki.libsonnet') +
{
  local container = $.core.v1.container,
  local containerPort = $.core.v1.containerPort,
  local deployment = $.apps.v1.deployment,
  local volume = $.core.v1.volume,
  local volumeMount = $.core.v1.volumeMount,

  loki+: {
    local this = self,
    deployables+: {
      container:: container.new(this.name, this.image)
        + container.withPorts(containerPort.newNamed(this.ports.internal, 'http'))
        + container.withVolumeMounts([
          volumeMount.new('config', '/etc/loki', true),
          volumeMount.new(this.name, '/loki'),
        ])
        + container.resources.withRequests({cpu: this.resources.cpu.request, memory: this.resources.memory.request})
        + container.resources.withLimits({cpu: this.resources.cpu.limit, memory: this.resources.memory.limit})
        + container.livenessProbe.withPeriodSeconds(60)
        + container.livenessProbe.httpGet.withPath('/ready')
        + container.livenessProbe.httpGet.withPort(this.ports.internal)
        + container.readinessProbe.httpGet.withPath('/ready')
        + container.readinessProbe.httpGet.withPort(this.ports.internal)
        + container.startupProbe.httpGet.withPath('/ready')
        + container.startupProbe.httpGet.withPort(this.ports.internal)
        + container.startupProbe.withFailureThreshold(30)
        + container.startupProbe.withPeriodSeconds(10),
      initContainer:: container.new(this.name + '-setup-permissions', this.image)
        + container.withCommand(["chown", "-R", "loki:loki", "/loki"])
        + container.withVolumeMounts([
          volumeMount.new(this.name, '/loki'),
        ])
        + container.securityContext.withRunAsUser(0),
      deployment: deployment.new(name = this.name, containers = [this.deployables.container], replicas = 1)
        + deployment.metadata.withAnnotations(this.annotations.deployment)
        + deployment.metadata.withLabels(this.labels.deployment)
        + deployment.spec.selector.withMatchLabels(this.labels.selector)
        + deployment.spec.template.metadata.withAnnotations(this.annotations.pod)
        + deployment.spec.template.metadata.withLabels(this.labels.pod + this.labels.selector)
        + deployment.spec.template.spec.withInitContainers([this.deployables.initContainer])
        + deployment.spec.template.spec.withServiceAccount(this.name)
        + deployment.spec.template.spec.withTerminationGracePeriodSeconds(60)
        + deployment.spec.template.spec.withVolumes([
          volume.fromConfigMap('config', this.name),
          volume.fromPersistentVolumeClaim(this.name, 'observability-' + this.name),
        ]),
    },
  },
}
