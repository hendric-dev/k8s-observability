{
  loki+: {
    local this = self,
    annotations:: {
      deployment: {},
      ingress: {},
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
    retention:: '4w',
    storage:: {
      size: '10Gi',
    },
  },
}
