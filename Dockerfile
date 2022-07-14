# syntax=docker/dockerfile:1

FROM node:14

WORKDIR /app

COPY "package.json" "./"

RUN npm install --production

COPY . .

CMD [ "node", "server.js" ]