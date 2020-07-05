const argv = require('yargs')
  .default('http',5000)
  .default('https',5001)
  .argv;
const app = require('./src/app.js').build(argv);

if (!argv.httpOnly){
    app.setupHttps(argv.https);
}

app.setupHttp(argv.http);