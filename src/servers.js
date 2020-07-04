const fs = require('fs');
const http = require('http');
const https = require('https');


exports.getHttps = function(app){
    let privateKey = fs.readFileSync('/etc/letsencrypt/live/possing.tech/privkey.pem','utf8');
    let certificate = fs.readFileSync('/etc/letsencrypt/live/possing.tech/cert.pem','utf8');
    let ca = fs.readFileSync('/etc/letsencrypt/live/possing.tech/chain.pem','utf8');
    const credentials = {
        key: privateKey,
        cert: certificate,
        ca: ca
    };
    return https.createServer(credentials,app);
};

exports.getHttp = function(app){
    return http.createServer(app);
}