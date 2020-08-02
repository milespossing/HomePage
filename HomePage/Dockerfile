FROM node:latest

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache
RUN node scss/build.js
CMD ["node","index.js"]