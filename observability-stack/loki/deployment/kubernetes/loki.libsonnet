(import '../../../shared/deployment/kubernetes/shared.libsonnet') +
{
  loki+: {
    local this = self,
    annotations:: $.shared.annotations,
    env:: $.shared.env,
    image:: 'grafana/loki:2.6.1',
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
