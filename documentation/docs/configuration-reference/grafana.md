---
title: Grafana Configuration Reference
---

# Grafana

This section shows all available options that can be overridden in the `config.jsonnet` file.

All Grafana config is stored under the **grafana** object in the config.

```js
{
  grafana+: {
    annotations:: {
      deployment: {},
      ingress: {},
      pod: {},
    },
    credentials:: {
      admin: {
        username: '<fill with admin username>',
        password: '<fill with admin password>',
      },
    },
    host:: 'grafana.my-server.com',
    image:: 'grafana/grafana:9.0.5',
    labels:: {
      deployment: {},
      pod: {},
      selector: {'app.kubernetes.io/name': this.name},
    },
    name:: 'grafana',
    path:: '/',
    ports:: {
      external: 80,
      internal: 3000,
    },
    resources:: {
      cpu: {request: '50m', limit: '200m'},
      memory: {request: '32Mi', limit: '128Mi'},
    },
  }
}
```

| Field | Description / Default |
| --- | --- |
| `annotations.deployment` | Annotations added at the deployment (topmost) level. <br> `{}` |
| `annotations.ingress` | Annotations added to the ingress. <br> `{}` |
| `annotations.pod` | Annotations added at the pod level. <br> `{}` |
| `credentials.admin.username` | Admin username for Grafana. <br> `<fill with admin username>` |
| `credentials.admin.password` | Admin password for Grafana. <br> `<fill with admin password>` |
| `host` | Hostname where the UI is exposed. <br> `grafana.my-server.com` |
| `image` | Docker image that gets deployed. <br> `grafana/grafana:9.0.5` |
| `labels.deployment` | Labels added at the deployment (topmost) level. <br> `{}` |
| `labels.pod` | Labels added at the pod level. <br> `{}` |
| `labels.selector` | Selector used for all Grafana k8s resources. <br> `{'app.kubernetes.io/name': 'grafana'}` |
| `name` | Name used for the k8s resources. <br> `grafana` |
| `path` | Path where the UI is exposed. <br> `/` |
| `ports.external` | External port where the UI is exposed. <br> `80` |
| `ports.internal` | Internal port used inside the container. <br> `3000` |
| `resources.cpu.request` | Min. requested amount of CPU time. <br> `50m` |
| `resources.cpu.limit` | Max. allowed amount of CPU time. <br> `200m` |
| `resources.memory.request` | Min. requested amount of memory. <br> `32Mi` |
| `resources.memory.limit` | Max. allowed amount of memory. <br> `128Mi` |
