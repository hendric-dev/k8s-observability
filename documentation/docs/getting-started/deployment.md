---
title: Deployment
---

# Deployment

Deploying with Tanka is as simple as running:

```sh
tk apply environments/default
```

This creates all resources and the observability stack should be running shortly after.

The exposed endpoints may vary due to the hosts specified in the `config.jsonnet`. \
By default:

* Grafana -> http://grafana.my-server.com
* InfluxDB -> http://monitoring.db.my-server.com

## Noteworthy Tanka Commands

Tanka is a mighty tool with lots of helpful features.
Checkout [their documentation](https://tanka.dev/tutorial/jsonnet) for detailed information.

Some noteworthy commands:

* `tk apply -t deployment/grafana environments/default`
  * Use the "target" flag to apply specific resources
* `tk show environments/default`
  * Showcasts the deployment as standard k8s yaml files
* `tk diff environments/default`
  * Shows a diff with the current deployed version
* `tk export k8s-observability environments/default`
  * Exports the deployment as standard k8s yaml files
