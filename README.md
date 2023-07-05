# Bloggy

An Advanced Blogging system which is a replica of Hashnode.

## Features

## Architecture

## Installations

## Logs

- [x] Setup Jenkins CI to build and push to private docker repo
- [x] Setup postgres instance deployment on Rails
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
