const express = require('express');
const servers = require('./servers');
const app = express()

app.use(function (req,res,next) {
    console.log('Time:',Date.now());
    next();
});
app.use(function (req,res,next) {
    console.log('Url:', req.url);
    next();
})

app.get('/', (req,res) => res.redirect('/index.html'))
app.use(express.static('public'))

exports.setupHttp = function(port){
    let http = servers.getHttp(app);
    http.listen(port,() => console.log(`Http server running on port ${port}`))
}

exports.setupHttps = function (port) {
    let https = servers.getHttps(app);
    https.listen(port,() => console.log(`Https server running on port ${port}`))
}
