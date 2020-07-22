FROM node:latest

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

RUN node scss/build.js
CMD ["node","index.js"]