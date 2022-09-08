(import 'loki.libsonnet') +
{
  local persistentVolume = $.core.v1.persistentVolume,
  local persistentVolumeClaim = $.core.v1.persistentVolumeClaim,

  loki+: {
    local this = self,
    persistentVolume: persistentVolume.new('observability-' + this.name)
      + persistentVolume.metadata.withLabels(this.labels.selector)
      + persistentVolume.spec.withAccessModes(['ReadWriteOnce'])
      + persistentVolume.spec.withCapacity({storage: this.storage.size})
      + persistentVolume.spec.withPersistentVolumeReclaimPolicy('Retain')
      + persistentVolume.spec.withStorageClassName('observability-' + this.name)
      + (
        if std.objectHasAll(this.storage, 'nfs') && std.objectHasAll(this.storage.nfs, 'server')
        then persistentVolume.spec.nfs.withServer(this.storage.nfs.server)
          + persistentVolume.spec.nfs.withPath(this.storage.path)
          + persistentVolume.spec.nfs.withReadOnly(false)
        else persistentVolume.spec.hostPath.withPath(this.storage.path)
      ),
    persistentVolumeClaim: persistentVolumeClaim.new('observability-' + this.name)
      + persistentVolumeClaim.metadata.withLabels(this.labels.selector)
      + persistentVolumeClaim.spec.withAccessModes(['ReadWriteOnce'])
      + persistentVolumeClaim.spec.withStorageClassName('observability-' + this.name)
      + persistentVolumeClaim.spec.resources.withRequests({storage: this.storage.size})
  },
}
