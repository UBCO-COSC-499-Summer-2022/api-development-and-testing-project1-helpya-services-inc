# syntax=docker/dockerfile:1

FROM node:12.18.1

WORKDIR /app

COPY "package.json" "./"

RUN npm install --production

COPY . .

ENV PORT=3306
EXPOSE 3306
CMD [ "node", "server.js" ]