# Build Stage
FROM node:12-stretch AS build
WORKDIR /build
COPY package-lock.json package.json ./
RUN npm ci --only=production
RUN npm run build
COPY . .

# runtime stage
FROM alpine:3.10
RUN apk add --update nodejs npm
RUN addgroup -S node && adduser -S node -G node
USER node 

RUN mkdir /home/node/code

WORKDIR /home/node/code

COPY --from=build --chown=node:node ./build .

CMD ["node", "src/index.js"]