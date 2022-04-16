{
  vector+: {
    local this = self,
    annotations:: {
      deployment: {},
      pod: {},
    },
    image:: 'timberio/vector:0.21.0-alpine',
    labels:: {
      deployment: {},
      pod: {},
      selector: {'app.kubernetes.io/name': this.name},
    },
    name:: 'vector',
    resources:: {
      cpu: {request: '50m', limit: '200m'},
      memory: {request: '128Mi', limit: '256Mi'},
    },
  },
}
