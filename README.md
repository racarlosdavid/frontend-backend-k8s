

```sh
docker build -t racarlosdavid/k8s_proxy_backend .
docker build -t racarlosdavid/k8s_proxy_frontend .

docker push racarlosdavid/k8s_proxy_backend
docker push racarlosdavid/k8s_proxy_frontend
```

```sh
gcloud config set compute/zone us-central1-a 
gcloud container clusters create test-dns-interno --num-nodes=2 --machine-type=n1-standard-2 --no-enable-network-policy
```
