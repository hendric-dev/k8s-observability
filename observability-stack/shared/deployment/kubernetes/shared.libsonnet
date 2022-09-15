{
  shared+: {
    local this = self,
    labels:: {
      selector: {'app.kubernetes.io/name': this.name},
    },
    storage:: {
      class: {
        name: this.name,
      },
      name: 'observability',
      path: '/opt/observability',
      size: '50Gi',
    },
  }
}
