const express = require('express');
const servers = require('./servers');
const app = express();
const logger = require('morgan');
const {url_logger} = require('./url-logger');

exports.build = function()
{
    process.env.SILENT || app.use(logger('dev'))

    app.use(express.static('public'));
    app.use(function () {

    })
    app.get('/', (req,res) => res.redirect('/index.html'))

    app.use(function(req,res,next){
        res.redirect('/error.html');
    });
    return exports;
}

exports.setupHttp = function(port){
    let http = servers.getHttp(app);
    http.listen(port,() => console.log(`Http server running on port ${port}`))
}
