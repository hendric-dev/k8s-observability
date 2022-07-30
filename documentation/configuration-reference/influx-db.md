---
title: Influx DB Configuration Reference
---

# Influx DB

This section shows all available options that can be overridden in the `config.jsonnet` file.

All InfluxDB config is stored under the **influxDB** object in the config.

```js
{
  influxDB+: {
    annotations:: {
      deployment: {},
      ingress: {},
      pod: {},
    },
    bucket:: 'metrics',
    host:: 'monitoring.db.my-server.com',
    image:: 'influxdb:2.2.0-alpine',
    labels:: {
      deployment: {},
      pod: {},
      selector: {'app.kubernetes.io/name': this.name},
    },
    name:: 'influx-db',
    organisation:: 'observability',
    path:: '/',
    ports:: {
      external: 80,
      internal: 8086,
    },
    resources:: {
      cpu: {request: '100m', limit: '4'},
      memory: {request: '128Mi', limit: '512Mi'},
    },
    retention:: '1w',
    secrets:: {
      username: '<fill with InfluxDB username>',
      password: '<fill with InfluxDB password>',
    },
    storage:: {
      size: '10Gi',
    },
  },
}
```

| Field | Description |
| --- | --- |
| `annotations.deployment` | Annotations added at the deployment (topmost) level. <br> `{}` |
| `annotations.ingress` | Annotations added to the ingress. <br> `{}` |
| `annotations.pod` | Annotations added at the pod level. <br> `{}` |
| `bucket` | Bucket name used for the metrics. <br> `metrics` |
| `host` | Hostname where the UI is exposed. <br> `monitoring.db.my-server.com` |
| `image` | Docker image that gets deployed. <br> `influxdb:2.2.0-alpine` |
| `labels.deployment` | Labels added at the deployment (topmost) level. <br> `{}` |
| `labels.pod` | Labels added at the pod level. <br> `{}` |
| `labels.selector` | Selector used for all InfluxDB k8s resources. <br> `{'app.kubernetes.io/name': 'influx-db'}` |
| `name` | Name used for the k8s resources. <br> `influx-db` |
| `organisation` | Name of the organisation. <br> `observability` |
| `path` | Path where the UI is exposed. <br> `/` |
| `ports.external` | External port where the UI is exposed. <br> `80` |
| `ports.internal` | Internal port used inside the container. <br> `8086` |
| `resources.cpu.request` | Min. requested amount of CPU time. <br> `100m` |
| `resources.cpu.limit` | Max. allowed amount of CPU time. <br> `4` |
| `resources.memory.request` | Min. requested amount of memory. <br> `128Mi` |
| `resources.memory.limit` | Max. allowed amount of memory. <br> `512Mi` |
| `retention` | Retention policy used for the metrics bucket. <br> `1w` |
| `secrets.username` | Username for the InfluxDB. <br> `<fill with InfluxDB username>` |
| `secrets.password` | Password for the InfluxDB. <br> `<fill with InfluxDB password>` |
| `storage.size` | Amount of storage to allocate for the database. <br> `10Gi` |
