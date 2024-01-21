- Install Minikube, Docker, Kubectl, Tanka, Jsonnet Bundler

- minikube start
- minikube addons enable ingress
- jb install
- tk apply environments/default --tla-str minikube=$(minikube ip)


Changes:
- Host nullable
- Storage ReclaimPolicy