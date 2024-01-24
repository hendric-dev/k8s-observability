(import 'tempo.libsonnet') +
{
  local service = $.core.v1.service,
  local servicePort = $.core.v1.servicePort,

  tempo+: {
    local this = self,
    deployables+: {
      service:
        service.new(
          this.name,
          this.labels.selector,
          [
            servicePort.newNamed(port, this.ports[port].external, this.ports[port].internal)
            for port in std.objectFieldsAll(this.ports)
          ]
        )
        + service.metadata.withLabels(this.labels.selector),
    },
  },
}
