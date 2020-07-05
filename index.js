const argv = require('yargs').default('ports',[5000,5001]).argv;
const app = require('./src/app.js').build(argv);

let [http,https] = argv.ports;

if (!argv.http){
    app.setupHttps(https);
}

app.setupHttp(argv.p || http);