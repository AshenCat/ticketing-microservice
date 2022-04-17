# Docker commands

docker build -t kliffordagujar/posts .
    - build an image based on the dockerfile in the current directory. Tag it as kliffordagujar/posts
docker run [image id or image tag]
    - create and start a container based on the provided image id or tag
docker run -it [image id or image tag] [cmd]
    - create and start container, but also override the default command
docker ps
    - print out information about all of the running containers
docker exec -it [contianer id] [cmd]
    - Execute the given command in a running container
docker logs [contianer id]
    - print out logs from the given container
docker push kliffordagujar/posts

# K8s commands

kubectl get pods
kubectl exec -it [pod_name] [cmd]
kubectl logs [pod_name]
kubectl delete pod [pod_name]
kubectl apply -f [config file name]
kubectl describe pod [pod_name]

kubectl get [deployments, services, secrets, namespace] [-n] [name]
kubectl describe deployment [depl_name]
kubectl apply -f [config file name]
kubectl delete deployment [depl_name]

kubectl rollout restart deployment [depl_name]

kubectl create secret generic jwt-secret --from-literal=jwt=asdf

skaffold dev