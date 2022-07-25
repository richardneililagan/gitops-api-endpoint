FROM node:16-slim

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn --production

COPY src/index.js .

ENTRYPOINT ["node", "index"]
