(import 'vector.libsonnet') +
{
  local clusterRole = $.rbac.v1.clusterRole,
  local clusterRoleBinding = $.rbac.v1.clusterRoleBinding,
  local resourceRule = $.authorization.v1.resourceRule,
  local serviceAccount = $.core.v1.serviceAccount,
  local subject = $.rbac.v1.subject,

  vector+: {
    local this = self,
    deployables+: {
      clusterRole:
        clusterRole.new(this.name)
        + clusterRole.metadata.withLabels(this.labels.selector)
        + clusterRole.withRules([
          resourceRule.withApiGroups('')
          + resourceRule.withResources(['pods', 'namespaces', 'nodes', 'nodes/proxy'])
          + resourceRule.withVerbs(['get', 'list', 'watch']),
        ]),
      clusterRoleBinding:
        clusterRoleBinding.new(this.name)
        + clusterRoleBinding.metadata.withLabels(this.labels.selector)
        + clusterRoleBinding.roleRef.withName(this.name)
        + clusterRoleBinding.roleRef.withKind('ClusterRole')
        + clusterRoleBinding.roleRef.withApiGroup('rbac.authorization.k8s.io')
        + clusterRoleBinding.withSubjects(
          subject.withName(this.name)
          + subject.withKind('ServiceAccount')
          + subject.withNamespace(this.namespace),
        ),
      serviceAccount:
        serviceAccount.new(this.name)
        + serviceAccount.metadata.withLabels(this.labels.selector)
        + serviceAccount.withAutomountServiceAccountToken(false),
    },
  },
}
