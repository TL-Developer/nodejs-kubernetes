# nodejs-kubernetes

Deploy app NodeJS on kubernetes

Mock response with faker

# docker build
```docker build -t liminha/nodejs-kubernetes .```

# docker run
```docker run -d -p 3000:3000 liminha/nodejs-kubernetes```

# docker push
```docker push liminha/nodejs-kubernetes:latest```

# kubernetes apply
```kubectl apply -f namespace.yml```
```kubectl apply -f deployment.yml```
```kubectl apply -f service.yml```

# kubernetes namespace
```kubectl.exe get svc -n monitoring```

# setup prometheus / grafana
```git clone https://github.com/prometheus-operator/kube-prometheus.git```
```cd kube-prometheus```
```kubectl create -f manifest/setup```
```kubectl apply -f manifests```

# kubernetes port forward namespace nodejs
```kubectl port-forward -n nodejsk8s svc/nodejsk8s-service 3000:5000```

# kubernetes port forward namespace grafana
```kubectl port-forward -n monitoring svc/grafana 33000:3000```

# kubernetes port forward namespace prometheus
```kubectl.exe port-forward -n monitoring svc/prometheus-k8s 9090:9090```

# kubernetes port forward namespace node exporter
```kubectl.exe port-forward -n monitoring svc/node-exporter 9100:9100```

# kubernetes port forward namespace monitoring and nodejs all
```
kubectl port-forward -n nodejsk8s svc/nodejsk8s-service 8181:5000 & \
kubectl port-forward -n monitoring svc/grafana 3000:3000 & \
kubectl.exe port-forward -n monitoring svc/prometheus-k8s 9090:9090 & \
kubectl.exe port-forward -n monitoring svc/node-exporter 9100:9100 & \
kubectl.exe port-forward -n monitoring svc/alertmanager-main 9093:9093 & \
kubectl.exe port-forward -n monitoring svc/blackbox-exporter 9115:9115 & \
kubectl.exe port-forward -n monitoring svc/kube-state-metrics 8443:8443 &
```

# prometheus connection
http://host.docker.internal:9090 alternative for localhost

# grafana kubernetes cluster prometheus (6417)
https://grafana.com/grafana/dashboards/6417-kubernetes-cluster-prometheus/