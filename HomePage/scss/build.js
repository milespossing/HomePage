const fs = require('fs');
const sass = require('sass');

exports.build = function(){
    console.log('building scss');

    var result = sass.renderSync({
        file: './scss/index.scss',
        outFile: './public/index.css'
    });

    fs.writeFile('./public/index.css', result.css, err => {
        if (err) console.log(err);
        else console.log("Success")
    });
}