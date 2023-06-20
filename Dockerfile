FROM node:18

WORKDIR /app

COPY package*.json ./

RUN yarn add grpc-tools --ignore-scripts
RUN yarn install

COPY . .

CMD ["node", "index.js"]
