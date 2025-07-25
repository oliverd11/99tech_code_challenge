FROM node:alpine

RUN mkdir -p /usr && chown -R node:node /usr

WORKDIR /usr

COPY package.json ./

RUN npm install --pure-lockfile

RUN npm install -g typescript ts-node

COPY --chown=node:node . .

EXPOSE 5000

CMD [ "ts-node", "src/index.ts" ]
