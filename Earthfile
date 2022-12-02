VERSION 0.6

FROM grafana/tanka:0.23.1
WORKDIR k8s-observability

export:
  RUN tk init
  COPY observability-stack vendor/observability-stack
  RUN echo "
      (import 'k.libsonnet') +
      (import 'observability-stack/grafana/deployment/kubernetes/index.libsonnet') +
      (import 'observability-stack/influxdb/deployment/kubernetes/index.libsonnet') +
      (import 'observability-stack/loki/deployment/kubernetes/index.libsonnet') +
      (import 'observability-stack/shared/deployment/kubernetes/index.libsonnet') +
      (import 'observability-stack/tempo/deployment/kubernetes/index.libsonnet') +
      (import 'observability-stack/vector/deployment/kubernetes/index.libsonnet')
    " > environments/default/main.jsonnet
  RUN tk export k8s environments/default/
  SAVE ARTIFACT k8s AS LOCAL k8s

validate-kubernetes-deployment:
  COPY +export/k8s .
  ARG VERSION=0.5.0
  RUN wget https://github.com/yannh/kubeconform/releases/download/v${VERSION}/kubeconform-linux-amd64.tar.gz -O kubeconform.tar.gz && \
    tar -xf kubeconform.tar.gz -C /usr/bin && \
    rm kubeconform.tar.gz
  RUN kubeconform -v
  RUN kubeconform -output json -strict -summary *.yaml
