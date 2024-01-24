# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]
### Added
- Improve stability by validating the Vector config before merges | [#72](https://github.com/hendric-dev/k8s-observability/issues/72)
- Add a local setup using Minikube | [#4](https://github.com/hendric-dev/k8s-observability/issues/4)

### Changed
- Updates
  - Grafana to `10.3.0`

## [0.6.5] - 2023-09-02
### Changed
- Updates
  - Grafana to `10.1.1`
  - Loki to `2.8.4`
  - Vector to `0.32.1-alpine`

## [0.6.4] - 2023-06-19
### Changed
- Updates
  - Grafana to `10.0.0`
  - Loki to `2.8.2`
  - Vector to `0.30.0-alpine`

## [0.6.3] - 2023-05-02
### Changed
- Updates
  - Grafana to `9.5.1`
  - InfluxDB to `2.7.1-alpine`
  - Loki to `2.8.1`
  - Vector to `0.29.1-alpine`

## [0.6.2] - 2023-04-02
### Changed
- Updates
  - Grafana to `9.4.7`
  - Loki to `2.7.5`
  - Vector to `0.28.1-alpine`

## [0.6.1] - 2023-02-12
### Changed
- Updates
  - Grafana to `9.3.6`
  - InfluxDB to `2.6.1-alpine`
  - Loki to `2.7.3`
  - Vector to `0.27.0-alpine`

## [0.6.0] - 2022-12-19
### Added
- Improve stability by validating the Kubernetes deployment using [kubeconform](https://github.com/yannh/kubeconform) | [#56](https://github.com/hendric-dev/k8s-observability/issues/56)
- A brand new dashboard to monitor Vector telemetry data | [#60](https://github.com/hendric-dev/k8s-observability/issues/60)
- It is now possible to add [custom metrics](https://hendric-dev.github.io/k8s-observability/advanced/custom-metrics.html)
| [#53](https://github.com/hendric-dev/k8s-observability/issues/53)

### Changed
- Updates ([Renovate #68](https://github.com/hendric-dev/k8s-observability/pull/68))
  - Grafana to `9.3.2`
  - Loki to `2.7.1`
  - InfluxDB to `2.6.0-alpine`
  - Vector to `0.26.0-alpine`

### Fixed
- Fixed a missing default config for security (TLS) | [#54](https://github.com/hendric-dev/k8s-observability/issues/54)

## [0.5.0] - 2022-09-19
### Added
- Storage classes can now be configured and will be added to the deployment | [#33](https://github.com/hendric-dev/k8s-observability/issues/33)
- Reduce config duplications by using the new `shared` config | [#34](https://github.com/hendric-dev/k8s-observability/issues/34)
- Added a config option for the ingress class name | [#43](https://github.com/hendric-dev/k8s-observability/issues/43)

### Changed
- Pods now share a volume with different subpaths | [#39](https://github.com/hendric-dev/k8s-observability/issues/39)
- Vector got a bit more CPU resources and less strict liveness probes | [#45](https://github.com/hendric-dev/k8s-observability/issues/45)
- `mean` is now used instead of `max` to aggregate pod resource metrics | [#48](https://github.com/hendric-dev/k8s-observability/issues/48)

## [0.4.0] - 2022-09-13
### Added
- [Tempo](https://github.com/grafana/tempo) is now part of the stack allowing to trace requests | [#24](https://github.com/hendric-dev/k8s-observability/issues/24)
- Allow to use an external NFS to store Grafana, Loki and InfluxDB data | [#23](https://github.com/hendric-dev/k8s-observability/issues/23)
- Custom dashboards can now be provisioned | [#25](https://github.com/hendric-dev/k8s-observability/issues/25)

### Changed
- Updated dependencies to the latest versions
  - Grafana: `9.0.5` -> `9.1.5`
  - InfluxDB: `2.2.0-alpine` -> `2.4.0-alpine`
  - Vector: `0.21.0-alpine` -> `0.24.1-alpine`

## [0.3.0] - 2022-08-30
### Added
- Makes it possible to [customize Grafana](https://hendric-dev.github.io/k8s-observability/configuration-reference/grafana.html#customize-grafana) further, using environment variables
| [#11](https://github.com/hendric-dev/k8s-observability/issues/11)
- Improve security by support TLS for the Influx and Grafana UIs | [#15](https://github.com/hendric-dev/k8s-observability/issues/15)
- Get an overview of CPU & memory usage with the new pod dashboards | [#5](https://github.com/hendric-dev/k8s-observability/issues/5)
- Grafana settings are now persisted over restarts | [#14](https://github.com/hendric-dev/k8s-observability/issues/14)

### Changed
- Changed the default Grafana home dashboard to the Kubernetes node resources | [#12](https://github.com/hendric-dev/k8s-observability/issues/12)

## [0.2.0] - 2022-08-15
### Added
- Loki was added to the stack to process Kubernetes logs | [#1](https://github.com/hendric-dev/k8s-observability/issues/1)
- It is now possible to add [custom log transformations](https://hendric-dev.github.io/k8s-observability/advanced/custom-log-transformations.html)
| [#3](https://github.com/hendric-dev/k8s-observability/issues/3)

## [0.1.0] - 2022-08-05
### Added
- Additional metrics for nodes and containers are scraped directly from Kubelet
- A Vitepress documentation on setting up the project was added
- The token for the InfluxDB API can be set, making the overall setup easier

### Changed
- Grafana username/password was moved to secrets in the config

[Unreleased]: https://github.com/hendric-dev/k8s-observability/compare/0.6.5...next
[0.6.5]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.6.4
[0.6.4]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.6.4
[0.6.3]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.6.3
[0.6.2]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.6.2
[0.6.1]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.6.1
[0.6.0]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.6.0
[0.5.0]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.5.0
[0.4.0]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.4.0
[0.3.0]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.3.0
[0.2.0]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.2.0
[0.1.0]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.1.0
