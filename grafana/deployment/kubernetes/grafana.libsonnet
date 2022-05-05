{
  grafana+: {
    local this = self,
    annotations:: {
      deployment: {},
      ingress: {},
      pod: {},
    },
    host:: 'grafana.my-server.com',
    image:: 'grafana/grafana:8.5.1',
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