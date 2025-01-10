FROM node:alpine

RUN mkdir -p /usr && chown -R node:node /usr

WORKDIR /usr

COPY package.json package-lock.json ./

RUN npm install --pure-lockfile

RUN npm install -g typescript ts-node

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "ts-node", "src/index.ts" ]
