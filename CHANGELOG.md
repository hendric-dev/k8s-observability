# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

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

[Unreleased]: https://github.com/hendric-dev/k8s-observability/compare/0.2.0...main
[0.2.0]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.2.0
[0.1.0]: https://github.com/hendric-dev/k8s-observability/releases/tag/0.1.0
