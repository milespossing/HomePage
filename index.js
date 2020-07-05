const argv = require('yargs').default('p',80).argv;
const app = require('./src/app.js').build(argv);

if (!argv.http){
    app.setupHttps(443);
}

app.setupHttp(argv.p);