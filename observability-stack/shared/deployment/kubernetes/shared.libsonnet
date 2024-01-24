{
  shared+: {
    local this = self,
    annotations:: {
      deployment: {},
      ingress: {},
      pod: {},
    },
    env:: {},
    ingress:: {},
    labels:: {
      deployment: {},
      pod: {},
      selector: { 'app.kubernetes.io/name': this.name },
    },
    name:: 'observability',
    security:: {
      tls: {
        enabled: false,
        issuer: '<fill with certificate issuer>',
      },
    },
    storage:: {
      class: {
        name: this.name,
      },
      name: this.name,
      path: '/opt/observability',
      reclaimPolicy: 'Retain',
      size: '50Gi',
    },
  },
}
