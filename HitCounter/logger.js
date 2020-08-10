const express = require('express');

exports.loggerClient = class {
  constructor(mongoClient) {
    this.router = express.Router();

    this.router.post('/',(req,res) => {
      let collection = mongoClient.db('log').collection('visits');
      collection.insertOne(req.body);
    });
  }
}