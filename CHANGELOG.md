# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

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

[Unreleased]: https://github.com/hendric-dev/k8s-observability/compare/0.4.0...main
[0.4.0]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.4.0
[0.3.0]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.3.0
[0.2.0]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.2.0
[0.1.0]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.1.0
