---
title: Shared Configuration Reference
---

# Shared

This section shows all shared options that can be overridden in the `config.jsonnet` file. \
Shared options are used for overarching settings that apply to all parts of the deployment as well as shared resources.

All shared config is stored under the **shared** object in the config.

```js
{
  shared+: {
    ingress:: {},
    labels:: {
      selector: {'app.kubernetes.io/name': 'observability'},
    },
    name:: 'observability',
    storage:: {
      class: {
        name: 'observability',
      },
      name: 'observability',
      path: '/opt/observability',
      size: '50Gi',
    },
  },
}
```

| Field | Description / Default |
| --- | --- |
| `ingress.className` | Class name added to all ingress resources. <br> `undefined` |
| `labels.selector` | Selector used for all shared k8s resources. <br> `{'app.kubernetes.io/name': 'observability'}` |
| `name` | Name used for the k8s resources. <br> `observability` |
| `storage.class.name` | Name of the storage class. <br> `observability` |
| `storage.class.parameters` | Extra parameters of the storage class. <br> `undefined` |
| `storage.class.provisioner` | Provisioner of the storage class. <br> `undefined` |
| `storage.name` | Name used for the PV and PVC k8s resources. <br> `observability` |
| `storage.nfs.server` | Address to an NFS which is used instead of the host. <br> `undefined` |
| `storage.path` | Path on the host or NFS where the data is stored. <br> `/opt/observability` |
| `storage.size` | Amount of storage to allocate for the Observability stack. <br> `50Gi` |
