# 📚 K8S Observability Documentation

This documentation is created using [Vitepress](https://vitepress.vuejs.org/) and published automatically on the repositories pages.

## Prerequisites

The following dependencies are needed to generate the documentation:

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)

Alternatively [Volta](https://volta.sh/) is also supported. If you have it installed, it automatically fetches the correct Node and Yarn versions.

## Install

First install the dependencies using yarn inside the documentation folder:

```sh
yarn
```

## Development

Vitepress features a blazing fast dev server with hot reloading. Start it using:

```sh
yarn dev
```

The server will be available at http://localhost:3000

## Docker

Only have Docker installed? No problem, just mount the folder into a Node.js container:

```sh
docker run --rm -it --entrypoint bash \
  -p 3000:3000
  -v $PWD:/documentation \
  -w /documentation \
  node:18
```

You find yourself inside the container and can run all `yarn` commands.

> **Warning** \
> Start all yarn commands with `--host` flag to expose the network \
> (e.g. `yarn dev --host`)
