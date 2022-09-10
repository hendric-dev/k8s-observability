{
  grafana+: {
    local this = self,
    annotations:: {
      deployment: {},
      ingress: {},
      pod: {},
    },
    dashboards:: [
      {
        definition: importstr '../../dashboards/kubernetes-node-resources.json',
        file: 'kubernetes-node-resources.json',
        folder: 'Kubernetes',
        title: 'Node Resources',
      },
      {
        definition: importstr '../../dashboards/kubernetes-pod-resources.json',
        file: 'kubernetes-pod-resources.json',
        folder: 'Kubernetes',
        title: 'Pod Resources',
      },
    ],
    env:: {},
    host:: 'grafana.my-server.com',
    image:: 'grafana/grafana:9.0.5',
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
      },
    },
    security:: {
      tls: {
        enabled: false,
        issuer: '<fill with certificate issuer>',
      },
    },
    storage:: {
      path: '/opt/observability/' + this.name,
      size: '10Gi',
    },
  }
}
