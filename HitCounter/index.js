const express = require('express');
const {MongoClient,Server} = require('mongodb');
const LoggerClient = require('./logger').loggerClient;

let mongoHost = process.env.MONGO_HOST || 'localhost';
let mongoPort = process.env.MONGO_PORT || 27017;

const connection = new MongoClient(new Server(mongoHost,mongoPort));
connection.connect().catch(err => console.log(`failure to connect to client: ${err}`));
const log = new LoggerClient(connection);

const app = express();

app.use('/',log.router)

let port = process.env.PORT || 5005;

app.listen(port)
