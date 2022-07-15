# syntax=docker/dockerfile:1

FROM node:latest

WORKDIR /app

COPY "package.json" "./"

RUN npm install --production

COPY . .

CMD [ "node", "server.js" ]