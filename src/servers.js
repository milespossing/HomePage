const fs = require('fs');
const http = require('http');

exports.getHttp = function(app){
    return http.createServer(app);
}