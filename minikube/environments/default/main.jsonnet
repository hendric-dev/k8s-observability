function(minikube, namespace='default') {
  apiVersion: 'tanka.dev/v1alpha1',
  kind: 'Environment',
  metadata: {
    name: 'environments/default',
  },
  spec: {
    apiServer: 'https://' + minikube + ':8443',
    namespace: namespace,
    resourceDefaults: {},
    expectVersions: {},
  },
  data:
    {
      minikube:: minikube,
      namespace:: namespace,
    } +
    (import 'k.libsonnet') +
    (import '../../../observability-stack/grafana/deployment/kubernetes/index.libsonnet') +
    (import '../../../observability-stack/influxdb/deployment/kubernetes/index.libsonnet') +
    (import '../../../observability-stack/loki/deployment/kubernetes/index.libsonnet') +
    (import '../../../observability-stack/shared/deployment/kubernetes/index.libsonnet') +
    (import '../../../observability-stack/tempo/deployment/kubernetes/index.libsonnet') +
    (import '../../../observability-stack/vector/deployment/kubernetes/index.libsonnet') +
    (import 'config.jsonnet'),
}
