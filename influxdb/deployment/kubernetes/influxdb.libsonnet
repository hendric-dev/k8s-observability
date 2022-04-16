{
  influxDB+: {
    local this = self,
    annotations:: {
      deployment: {},
      pod: {},
    },
    bucket:: 'metrics',
    image:: 'influxdb:2.2.0-alpine',
    labels:: {
      deployment: {},
      pod: {},
      selector: {'app.kubernetes.io/name': this.name},
    },
    name:: 'influx-db',
    organisation:: 'observability',
    ports:: {
      external: 80,
      internal: 8086,
    },
    resources:: {
      cpu: {request: '100m', limit: '300m'},
      memory: {request: '128Mi', limit: '512Mi'},
    },
    retention:: '1w',
    secrets:: {
      username: '<fill with InfluxDB username>',
      password: '<fill with InfluxDB password>',
    },
  },
}
