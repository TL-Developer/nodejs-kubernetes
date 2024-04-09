# nodejs-kubernetes

Deploy app NodeJS on kubernetes

Mock response with faker

# docker build
```docker build -t liminha/nodejs-kubernetes .```

# docker run
```docker run -d -p 3000:3000 liminha/nodejs-kubernetes```

# docker push
```docker push liminha/nodejs-kubernetes:latest```

# kubernetes espose
```kubectl expose deployment nodejsk8s-deployment --name=nodejsk8s-ipv4 --type=LoadBalancer --external-ip=6.6.6.6```

# kubernetes port forward
```kubectl port-forward deployment/nodejsk8s-deployment 3000:3000```