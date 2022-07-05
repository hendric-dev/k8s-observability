{
  influxDB+: {
    local this = self,
    annotations:: {
      deployment: {},
      ingress: {},
      pod: {},
    },
    bucket:: 'metrics',
    host:: 'monitoring.db.my-server.com',
    image:: 'influxdb:2.2.0-alpine',
    labels:: {
      deployment: {},
      pod: {},
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
    },
    storage:: {
      size: '10Gi',
    },
  },
}
