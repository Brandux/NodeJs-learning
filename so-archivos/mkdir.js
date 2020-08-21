const fs = require('fs');

fs.mkdir('br/mean', {recursive: true}, (error) => {
    if (error) {
        return console.log(err)
    } 
});