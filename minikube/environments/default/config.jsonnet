{
  grafana+: {
    env: {
      GF_SERVER_ROOT_URL: 'http://' + $.minikube + '/grafana',
      GF_SERVER_SERVE_FROM_SUB_PATH: true,
    },
    host: null,
    path: '/grafana',
    secrets:: {
      admin: {
        username: 'admin',
        password: 'password',
      },
    },
  },
  influxDB+: {
    host: null,
    path: '/',
    secrets+:: {
      username: 'admin',
      password: 'password',
      token: 'sWUIJBnKvj6Yxbd33JhgHxdjJWzTUKuqac-wFzE7bVBbS6XwkPL3JuCU4U-yxoepm-_F4DGXcdscvbMrUxvVzQ==',
    },
  },
  shared+: {
    storage+: {
      path: '/data',
      reclaimPolicy: 'Recycle',
      size: '10Gi',
    },
  },
  vector+: {
    namespace: $.namespace,
  },
}
