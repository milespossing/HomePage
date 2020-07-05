const argv = require('yargs')
  .default('p',5000)
  .argv;
const app = require('./src/app.js').build(argv);

app.setupHttp(argv.p);