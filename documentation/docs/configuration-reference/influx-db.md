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
    image:: 'influxdb:2.4.0-alpine',
    ingress:: {},
    labels:: {
      deployment: {},
      pod: {},
      selector: {'app.kubernetes.io/name': 'influx-db'},
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
      token: '<fill with API token>',
    },
    security:: {
      tls: {
        enabled: false,
        issuer: '<fill with certificate issuer>',
      },
    },
  },
}
```

| Field | Description / Default |
| --- | --- |
| `annotations.deployment` | Annotations added at the deployment (topmost) level. <br> `{}` |
| `annotations.ingress` | Annotations added to the ingress. <br> `{}` |
| `annotations.pod` | Annotations added at the pod level. <br> `{}` |
| `bucket` | Bucket name used for the metrics. <br> `metrics` |
| `host` | Hostname where the UI is exposed. <br> `monitoring.db.my-server.com` |
| `image` | Docker image that gets deployed. <br> `influxdb:2.4.0-alpine` |
| `ingress.className` | Class name added to the Influx DB ingress. <br> `undefined` |
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
| `secrets.token` | Token that can be used to access the InfluxDB API. <br> `<fill with API token>` |
| `security.tls.enabled` | Enables TLS, creating a certificate to access the Influx UI over HTTPS. <br> `false` |
| `security.tls.issuer` | Issuer or ClusterIssuer where the certificate is requested. See [cert-manager documentation](https://cert-manager.io/docs/concepts/issuer/) on how to set one up.  <br> `<fill with certificate issuer>` |
