---
title: Introduction
---

# Introduction

## Motivation

As an operator of a Kubernetes cluster it is important to have an overview what's going on in the system.

* *My pod was evicted again... is one of my nodes running out of memory?*
* *Are there any alarming logs coming from my pods?*
* *The engineer needs traces to debug the microservices.*

Setting up a proper observability stack can be quite a hassle. \
While there are some managed services, they are often
expensive and need additional customization to be usable.

## Tools

The observability solution combines the following open source tools to provide the best user experience:

* [Grafana](https://github.com/grafana/grafana) - UI to visualize logs and metrics
* [InfluxDB](https://github.com/influxdata/influxdb) - Database made for time series
* [Vector](https://github.com/vectordotdev/vector) - Aggregates and transforms logs and metrics

The tools were evaluated with regard to finding the best one for each task. \
**Reliability** played a big factor in the decision, since an observability stack should be reliable in the first place.
