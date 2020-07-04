const app = require('./src/app.js');
const argv = require('yargs').default('p',80).argv;

if (!argv.http){
    app.setupHttps(443);
}

app.setupHttp(argv.p);