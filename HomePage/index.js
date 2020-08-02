require('./scss/build').build();

const app = require('./src/app.js').build();

let port = process.env.PORT || 5000

app.setupHttp(port);