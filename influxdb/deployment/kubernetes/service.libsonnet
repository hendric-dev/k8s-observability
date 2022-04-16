(import 'influxdb.libsonnet') +
{
  local service = $.core.v1.service,
  local servicePort = $.core.v1.servicePort,

  influxDB+: {
    local this = self,
    service: service.new(
      this.name,
      this.labels.selector,
      [servicePort.newNamed('http', this.ports.external, this.ports.internal)],
    )
      + service.metadata.withLabels(this.labels.selector),
  },
}
