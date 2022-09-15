---
title: Setup Tanka
---

# Setup Tanka

## Usage with Docker

You don't have Tanka installed locally? Start by setting up a Docker container. \
Open a terminal in the folder where the project will be located and run:

```sh
docker run --rm -it --entrypoint sh \
  -v $HOME/.kube:/root/.kube \
  -v $PWD:/app \
  grafana/tanka
```

You are now inside the Docker container with your kube config and the current folder mounted.

## Initialize Tanka Project

First create a folder for the project:

```sh
mkdir k8s-observability && cd k8s-observability
```

Now let Tanka initialize everything:

```sh
tk init
```

## Install Libraries

Use `jb` to install the k8s-observability lib:

```sh
jb install https://github.com/hendric-dev/k8s-observability.git/observability-stack@main
```
