---
title: Vector Configuration Reference
---

# Vector

This section shows all available options that can be overridden in the `config.jsonnet` file.

All Vector config is stored under the **vector** object in the config.

```js
{
  vector+: {
    annotations:: {
      deployment: {},
      pod: {},
    },
    env:: {},
    image:: 'timberio/vector:0.29.1-alpine',
    labels:: {
      deployment: {},
      pod: {},
      selector: {'app.kubernetes.io/name': 'vector'},
    },
    logging:: {
      kubernetes: {
        transformations: [
          importstr '../../config/logs/kubernetes/aggregator.toml',
        ],
      }
    },
    metrics:: {
      custom: [importstr '../../config/metrics/custom-aggregator.toml'],
    },
    monitoring:: {
      influxDB: {
        bucket: "metrics",
        endpoint: "http://influx-db/",
        org: "observability",
      }
    },
    name:: 'vector',
    ports:: {
      external: 8686,
      internal: 8686,
    },
    resources:: {
      cpu: {request: '100m', limit: '500m'},
      memory: {request: '128Mi', limit: '256Mi'},
    },
  },
}
```

| Field | Description / Default |
| --- | --- |
| `annotations.deployment` | Annotations added at the deployment (topmost) level. <br> `{}` |
| `annotations.pod` | Annotations added at the pod level. <br> `{}` |
| `env` | Environment variables that are added to the Vector container. <br> `{}` |
| `image` | Docker image that gets deployed. <br> `timberio/vector:0.29.1-alpine` |
| `labels.deployment` | Labels added at the deployment (topmost) level. <br> `{}` |
| `labels.pod` | Labels added at the pod level. <br> `{}` |
| `labels.selector` | Selector used for all Vector k8s resources. <br> `{'app.kubernetes.io/name': 'vector'}` |
| `logging.kubernetes.transformations` | Array of Vector configs to [customize Kubernetes logs](/advanced/custom-log-transformations). <br> `[importstr 'aggregator.toml']` |
| `metrics.custom` | Array of Vector config to add [custom metrics](/advanced/custom-metrics). <br> `[importstr 'custom-aggregator.toml']` |
| `monitoring.influxDB.bucket` | Bucket name of the Influx DB. <br> `metrics` |
| `monitoring.influxDB.endpoint` | Endpoint of the Influx DB. <br> `http://influx-db/` |
| `monitoring.influxDB.org` | Organisation name of the Influx DB. <br> `observability` |
| `name` | Name used for the k8s resources. <br> `vector` |
| `ports.external` | External port of the Vector API. <br> `8686` |
| `ports.internal` | Internal port of the Vector API. <br> `8686` |
| `resources.cpu.request` | Min. requested amount of CPU time. <br> `100m` |
| `resources.cpu.limit` | Max. allowed amount of CPU time. <br> `500m` |
| `resources.memory.request` | Min. requested amount of memory. <br> `128Mi` |
| `resources.memory.limit` | Max. allowed amount of memory. <br> `256Mi` |
