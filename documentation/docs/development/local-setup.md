---
title: Local Setup
---

# Local Setup

It is possible to spin up a local version of the Observability stack for development purposes. \
This is useful for testing new features, debugging issues or validating an upgrade.

## Prerequisites

A local one node Kubernetes cluster is used to deploy the Observability stack. \
Therefore some tools are required:

- [Docker](https://docs.docker.com/engine/install/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [Kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Tanka + Jsonnet Bundler](https://tanka.dev/install)

## Usage

1. The first step is to start the local Kubernetes cluster

```sh
minikube start
```

2. Enable the ingress addon on Minikube, as the Grafana and InfluxDB dashboards are accessed via ingress:

```sh
minikube addons enable ingress
```

3. Install the Jsonnet dependencies. From the `minikube` folder run:

```sh
jb install
```

4. Apply the deployment by passing the Minikube IP:

```sh
tk apply environments/default --tla-str minikube=$(minikube ip)
```

Initialization may take a few minutes. Use kubectl to check the status:

```sh
kubectl get pods

NAME                         READY   STATUS    RESTARTS   AGE
grafana-79b957ffcd-zbghc     1/1     Running   0          2m
influx-db-859f67d695-hrm28   1/1     Running   0          2m
loki-5bc48f5589-7nqdr        1/1     Running   0          2m
tempo-6b998bc4b7-kqpzv       1/1     Running   0          2m
vector-8ftpd                 1/1     Running   0          2m
```

After everything is up and running, the two dashboards are reachable at:

- Grafana: `http://<minikube_ip>/grafana`
- InfluxDB: `http://<minikube_ip>/`

## Troubleshooting

### Grafana is restarting

Depending on your machine Grafana may take too long to initialize. The startup probe that kicks in after 3min restarts the pod if it is not ready by then. \
Temporarily disable the startup, readiness and liveness probes may solve the issue.
