(import 'vector.libsonnet') +
{
  local container = $.core.v1.container,
  local daemonSet = $.apps.v1.daemonSet,
  local envVar = $.core.v1.envVar,
  local toleration = $.core.v1.toleration,
  local volume = $.core.v1.volume,
  local volumeMount = $.core.v1.volumeMount,

  vector+: {
    local this = self,
    container:: container.new(this.name, this.image)
      + container.withEnv([
        envVar.fromFieldPath('VECTOR_SELF_NODE_NAME', 'spec.nodeName'),
        envVar.fromFieldPath('VECTOR_SELF_POD_NAME', 'metadata.name'),
        envVar.fromFieldPath('VECTOR_SELF_POD_NAMESPACE', 'metadata.namespace'),
        envVar.fromSecretRef('INFLUXDB_TOKEN', 'vector-influx-db-token', 'token'),
        envVar.fromSecretRef('KUBERNETES_API_TOKEN', 'vector-service-account-token', 'token'),
        envVar.new('INFLUXDB_BUCKET', this.monitoring.influxDB.bucket),
        envVar.new('INFLUXDB_ENDPOINT', this.monitoring.influxDB.endpoint),
        envVar.new('INFLUXDB_ORG', this.monitoring.influxDB.org),
        envVar.new('LOG', 'info'),
        envVar.new('LOKI_ENDPOINT', 'http://%(name)s:%(ports.external)s' % $.loki),
        envVar.new('PROCFS_ROOT', '/host/proc'),
        envVar.new('SYSFS_ROOT', '/host/sys'),
        envVar.new('VECTOR_CONFIG_DIR', '/etc/vector'),
      ])
      + container.resources.withRequests({cpu: this.resources.cpu.request, memory: this.resources.memory.request})
      + container.resources.withLimits({cpu: this.resources.cpu.limit, memory: this.resources.memory.limit})
      + container.withVolumeMounts([
        volumeMount.new('config', '/etc/vector', true),
        volumeMount.new('data-dir', '/vector-data-dir'),
        volumeMount.new('procfs', '/host/proc', true),
        volumeMount.new('service-account-token', '/var/run/secrets/kubernetes.io/serviceaccount/', true),
        volumeMount.new('sysfs', '/host/sys', true),
        volumeMount.new('var-lib', '/var/lib', true),
        volumeMount.new('var-log', '/var/log', true),
      ]),
    daemonSet: daemonSet.new(name = this.name, containers = [this.container])
      + daemonSet.metadata.withAnnotations(this.annotations.deployment)
      + daemonSet.metadata.withLabels(this.labels.deployment)
      + daemonSet.spec.selector.withMatchLabels(this.labels.selector)
      + daemonSet.spec.template.metadata.withAnnotations(this.annotations.pod)
      + daemonSet.spec.template.metadata.withLabels(this.labels.pod + this.labels.selector)
      + daemonSet.spec.template.spec.withServiceAccount(this.name)
      + daemonSet.spec.template.spec.withTerminationGracePeriodSeconds(60)
      + daemonSet.spec.template.spec.withTolerations([
        toleration.withOperator('Exists') + toleration.withEffect('NoSchedule'),
      ])
      + daemonSet.spec.template.spec.withVolumes([
        volume.fromConfigMap('config', this.name),
        volume.fromHostPath('data-dir', '/var/lib/vector'),
        volume.fromHostPath('procfs', '/proc'),
        volume.fromHostPath('sysfs', '/sys'),
        volume.fromHostPath('var-lib', '/var/lib'),
        volume.fromHostPath('var-log', '/var/log'),
        volume.fromSecret('service-account-token', 'vector-service-account-token'),
      ]),
  },
}
