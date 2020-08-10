FROM node:latest AS npm_init

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

FROM npm_init

COPY . .

CMD ["node","index.js"]