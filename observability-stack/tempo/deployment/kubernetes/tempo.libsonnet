(import '../../../shared/deployment/kubernetes/shared.libsonnet') +
(import '../../../shared/lib/index.libsonnet') +
{
  tempo+: {
    local this = self,
    local utils = $.shared.lib.utils,
    annotations:: $.shared.annotations,
    env:: $.shared.env,
    image:: utils.extractImageFromDockerfile(importstr 'image.Dockerfile'),
    labels:: $.shared.labels + {
      selector: {'app.kubernetes.io/name': this.name},
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
