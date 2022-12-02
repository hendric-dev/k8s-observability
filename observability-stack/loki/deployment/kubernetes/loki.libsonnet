(import '../../../shared/deployment/kubernetes/shared.libsonnet') +
(import '../../../shared/lib/index.libsonnet') +
{
  loki+: {
    local this = self,
    local utils = $.shared.lib.utils,
    annotations:: $.shared.annotations,
    env:: $.shared.env,
    image:: utils.extractImageFromDockerfile(importstr 'image.Dockerfile'),
    labels:: $.shared.labels + {
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
  },
}
