const express = require('express');
const servers = require('./servers');
const app = express();
const logger = require('morgan');

exports.build = function(argv)
{
    argv.silent || app.use(logger('dev'))

    app.use(express.static('public'));
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
