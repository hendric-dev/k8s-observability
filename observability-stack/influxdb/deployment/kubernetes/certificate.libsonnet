(import 'influxdb.libsonnet') +
{
  influxDB+: {
    local this = self,
    deployables+: {
      certificate: (
        if this.security.tls.enabled
        then {
          apiVersion: 'cert-manager.io/v1',
          kind: 'Certificate',
          metadata: {
            labels: {
              'app.kubernetes.io/name': this.name,
            },
            name: this.name + '-certificate',
          },
          spec: {
            secretName: this.name + '-certificate',
            issuerRef: {
              name: this.security.tls.issuer,
            },
            dnsNames: [this.host],
          },
        }
        else {}
      ),
    },
  },
}
