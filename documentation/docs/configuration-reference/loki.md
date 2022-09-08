---
title: Loki Configuration Reference
---

# Loki

This section shows all available options that can be overridden in the `config.jsonnet` file.

All Loki config is stored under the **loki** object in the config.

```js
{
  loki+: {
    annotations:: {
      deployment: {},
      pod: {},
    },
    image:: 'grafana/loki:2.6.1',
    labels:: {
      deployment: {},
      pod: {},
      selector: {'app.kubernetes.io/name': this.name},
    },
    name:: 'loki',
    ports:: {
      external: 80,
      internal: 3100,
    },
    resources:: {
      cpu: {request: '100m', limit: '1'},
      memory: {request: '128Mi', limit: '512Mi'},
    },
    retention:: '672h',
    storage:: {
      path: '/opt/observability/loki',
      size: '10Gi',
    },
  },
}
```

| Field | Description / Default |
| --- | --- |
| `annotations.deployment` | Annotations added at the deployment (topmost) level. <br> `{}` |
| `annotations.pod` | Annotations added at the pod level. <br> `{}` |
| `image` | Docker image that gets deployed. <br> `grafana/loki:2.6.1` |
| `labels.deployment` | Labels added at the deployment (topmost) level. <br> `{}` |
| `labels.pod` | Labels added at the pod level. <br> `{}` |
| `labels.selector` | Selector used for all Loki k8s resources. <br> `{'app.kubernetes.io/name': 'loki'}` |
| `name` | Name used for the k8s resources. <br> `loki` |
| `ports.external` | External port where Loki is exposed. <br> `80` |
| `ports.internal` | Internal port used inside the container. <br> `3100` |
| `resources.cpu.request` | Min. requested amount of CPU time. <br> `100m` |
| `resources.cpu.limit` | Max. allowed amount of CPU time. <br> `1` |
| `resources.memory.request` | Min. requested amount of memory. <br> `128Mi` |
| `resources.memory.limit` | Max. allowed amount of memory. <br> `512Mi` |
| `retention` | Retention policy used for the log files (in hours). <br> `672h` |
| `storage.nfs.server` | Address to an NFS which is used instead of the host. <br> `undefined` |
| `storage.path` | Path on the host or NFS where the data is stored. <br> `/opt/observability/loki` |
| `storage.size` | Amount of storage to allocate for Loki. <br> `10Gi` |
