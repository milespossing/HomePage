const fs = require('fs');
const http = require('http');
const https = require('https');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/possing.tech/privkey.pem','utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/possing.tech/cert.pem','utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/possing.tech/chain.pem','utf8');

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};

exports.getHttps = function(app){
    return https.createServer(credentials,app);
};

exports.getHttp = function(app){
    return http.createServer(app);
}