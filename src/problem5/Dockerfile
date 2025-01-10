FROM node:alpine

RUN mkdir -p /usr && chown -R node:node /usr

WORKDIR /usr

COPY package.json ./

RUN npm install

RUN npm install -g typescript ts-node

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "ts-node", "src/index.ts" ]
