---
title: Tempo Configuration Reference
---

# Tempo

This section shows all available options that can be overridden in the `config.jsonnet` file.

All Tempo config is stored under the **tempo** object in the config.

```js
{
  tempo+: {
    annotations:: {
      deployment: {},
      pod: {},
    },
    image:: 'grafana/tempo:1.5.0',
    labels:: {
      deployment: {},
      pod: {},
      selector: {'app.kubernetes.io/name': 'tempo'},
    },
    name:: 'tempo',
    ports:: {
      jaeger: {
        external: 14268,
        internal: 14268,
      },
      'otlp-grpc': {
        external: 4317,
        internal: 4317,
      },
      'otlp-http': {
        external: 4318,
        internal: 4318,
      },
      tempo: {
        external: 80,
        internal: 3200,
      },
      zipkin: {
        external: 9411,
        internal: 9411,
      },
    },
    resources:: {
      cpu: {request: '50m', limit: '200m'},
      memory: {request: '32Mi', limit: '256Mi'}
    },
  },
}
```

| Field | Description / Default |
| --- | --- |
| `annotations.deployment` | Annotations added at the deployment (topmost) level. <br> `{}` |
| `annotations.pod` | Annotations added at the pod level. <br> `{}` |
| `image` | Docker image that gets deployed. <br> `grafana/tempo:1.5.0` |
| `labels.deployment` | Labels added at the deployment (topmost) level. <br> `{}` |
| `labels.pod` | Labels added at the pod level. <br> `{}` |
| `labels.selector` | Selector used for all Tempo k8s resources. <br> `{'app.kubernetes.io/name': 'tempo'}` |
| `name` | Name used for the k8s resources. <br> `tempo` |
| `ports.jaeger.external` | External port for the Jaeger receiver. <br> `14268` |
| `ports.jaeger.internal` | Internal port for the Jaeger receiver. <br> `14268` |
| `ports.otlp-grpc.external` | External port for the Opentelemetry gRPC receiver. <br> `4317` |
| `ports.otlp-grpc.internal` | Internal port for the Opentelemetry gRPC receiver. <br> `4317` |
| `ports.otlp-http.external` | External port for the Opentelemetry HTTP receiver. <br> `4318` |
| `ports.otlp-http.internal` | Internal port for the Opentelemetry HTTP receiver. <br> `4318` |
| `ports.tempo.external` | External port for Tempo. <br> `80` |
| `ports.tempo.internal` | Internal port for Tempo. <br> `3200` |
| `ports.zipkin.external` | External port for the Zipkin receiver. <br> `9411` |
| `ports.zipkin.internal` | Internal port for the Zipkin receiver. <br> `9411` |
| `resources.cpu.request` | Min. requested amount of CPU time. <br> `50m` |
| `resources.cpu.limit` | Max. allowed amount of CPU time. <br> `200m` |
| `resources.memory.request` | Min. requested amount of memory. <br> `32Mi` |
| `resources.memory.limit` | Max. allowed amount of memory. <br> `256Mi` |
