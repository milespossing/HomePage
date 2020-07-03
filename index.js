const express = require('express')
const servers = require('./servers');
const app = express()

app.get('/', (req,res) => res.redirect('/index.html'))
app.use(express.static('public'))

let http = servers.getHttp(app);
let https = servers.getHttps(app);


http.listen(80,() => console.log('Http server running on port 80'))
https.listen(443,() => console.log('Https server running on port 443'))