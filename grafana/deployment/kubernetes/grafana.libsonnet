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
    secrets:: {
      admin: {
        username: '<fill with admin username>',
        password: '<fill with admin password>',
      }
    }
  }
}
