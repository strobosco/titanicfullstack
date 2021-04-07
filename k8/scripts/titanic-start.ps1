cd ../backend

kubectl apply -f backend-deployment.yaml

kubectl apply -f backend-service.yaml

cd ../frontend

kubectl apply -f frontend-deployment.yaml

kubectl apply -f frontend-service.yaml

cd ../ingress

kubectl apply -f titanic-ingress.yaml

cd ../scripts