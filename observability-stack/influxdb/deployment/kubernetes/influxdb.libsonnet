(import '../../../shared/deployment/kubernetes/shared.libsonnet') +
(import '../../../shared/lib/index.libsonnet') +
{
  influxDB+: {
    local this = self,
    local utils = $.shared.lib.utils,
    annotations:: $.shared.annotations,
    bucket:: 'metrics',
    env:: $.shared.env,
    host:: 'monitoring.db.my-server.com',
    image:: utils.extractImageFromDockerfile(importstr 'image.Dockerfile'),
    ingress:: $.shared.ingress,
    labels:: $.shared.labels + {
      selector: {'app.kubernetes.io/name': this.name},
    },
    name:: 'influx-db',
    organisation:: 'observability',
    path:: '/',
    ports:: {
      external: 80,
      internal: 8086,
    },
    resources:: {
      cpu: {request: '100m', limit: '4'},
      memory: {request: '128Mi', limit: '512Mi'},
    },
    retention:: '1w',
    secrets:: {
      username: '<fill with InfluxDB username>',
      password: '<fill with InfluxDB password>',
      token: '<fill with API token>',
    },
    security:: $.shared.security,
  },
}
