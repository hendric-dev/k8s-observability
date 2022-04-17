(import 'influxdb.libsonnet') +
{
  local persistentVolume = $.core.v1.persistentVolume,
  local persistentVolumeClaim = $.core.v1.persistentVolumeClaim,

  influxDB+: {
    local this = self,
    persistentVolume: persistentVolume.new('observability-' + this.name)
      + persistentVolume.metadata.withLabels(this.labels.selector)
      + persistentVolume.spec.withAccessModes(['ReadWriteOnce'])
      + persistentVolume.spec.withCapacity({storage: this.storage.size})
      + persistentVolume.spec.withPersistentVolumeReclaimPolicy('Retain')
      + persistentVolume.spec.withStorageClassName('observability-' + this.name)
      + persistentVolume.spec.hostPath.withPath('/opt/observability/influxdb'),
    persistentVolumeClaim: persistentVolumeClaim.new('observability-' + this.name)
      + persistentVolumeClaim.metadata.withLabels(this.labels.selector)
      + persistentVolumeClaim.spec.withAccessModes(['ReadWriteOnce'])
      + persistentVolumeClaim.spec.withStorageClassName('observability-' + this.name)
      + persistentVolumeClaim.spec.resources.withRequests({storage: this.storage.size})
  },
}