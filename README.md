# Bloggy

An Advanced Blogging system which is a replica of Hashnode.

## Features

## Architecture

## Installations

## Logs

- [ ] Setup Github Actions and Push to private Docker repo
- [ ] Setup Deployment on Rails or Render
- [ ] Use Husky as pre-hook for linting
- [ ] Setup Database [Prisma] and build a docker container:
  - [ ] create migration for developement and another for production
  - [ ] use prisma metrics to trace execution times of the running query
- [ ] Setup Sentry for error logging
- [ ] Use Kubernetes to deploy and manage the containerized API.
- [ ] Use Kubernetes secrets to securely store sensitive information such as passwords and API keys.
- [ ] Use NGINX as the ingress controller to expose the API to the internet.
- [ ] Implement horizontal pod autoscaling to automatically scale up or down the number of API instances based on the traffic.
- [x] Use Prometheus and Grafana to monitor the performance and health of the API.
- [ ] Use Let's Encrypt to secure the API with SSL/TLS.
- [ ] Write unit tests for all the endpoints and make sure that all the tests are passing.

docker run -d -e POSTGRES_DB=mydb -e POSTGRES_PASSWORD=testpass123 -e POSTGRES_USER=postgres -p “6500:5432” postgres
DATABASE_URL=”postgresql://postgres:testpass123@localhost:6500/mydb?schema=public”
