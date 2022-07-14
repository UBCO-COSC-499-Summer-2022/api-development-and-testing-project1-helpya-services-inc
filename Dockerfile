# syntax=docker/dockerfile:1

FROM node:14

WORKDIR ./

COPY "package.json" "./"

RUN npm install --production

COPY . .

CMD [ "node", "server.js" ]