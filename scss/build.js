require('fs');
var sass = require('sass');

var result = sass.renderSync({
    file: './scss/index.scss',
    outFile: './public/index.css'
});

fs.writeFile('./public/index.css', result.css, err => {
    console.log(err);
});