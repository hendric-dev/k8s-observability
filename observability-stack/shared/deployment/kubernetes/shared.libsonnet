{
  shared+: {
    local this = self,
    labels:: {
      selector: {'app.kubernetes.io/name': this.name},
    },
    name:: 'observability',
    storage:: {
      class: {
        name: this.name,
      },
      name: this.name,
      path: '/opt/observability',
      size: '50Gi',
    },
  },
}
