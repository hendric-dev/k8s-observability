(import '../../../shared/deployment/kubernetes/shared.libsonnet') +
{
  grafana+: {
    local this = self,
    local utils = $.shared.lib.utils,
    annotations:: $.shared.annotations,
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
      {
        definition: importstr '../../dashboards/observability-vector.json',
        file: 'observability-vector.json',
        folder: 'Observability',
        title: 'Vector',
      },
    ],
    env:: $.shared.env,
    host:: 'grafana.my-server.com',
    image:: utils.extractImageFromDockerfile(importstr 'image.Dockerfile'),
    ingress:: $.shared.ingress,
    labels:: $.shared.labels {
      selector: { 'app.kubernetes.io/name': this.name },
    },
    name:: 'grafana',
    path:: '/',
    ports:: {
      external: 80,
      internal: 3000,
    },
    resources:: {
      cpu: { request: '50m', limit: '200m' },
      memory: { request: '32Mi', limit: '128Mi' },
    },
    secrets:: {
      admin: {
        username: '<fill with admin username>',
        password: '<fill with admin password>',
      },
    },
    security:: $.shared.security,
  },
}
