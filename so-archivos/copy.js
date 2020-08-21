const fs = require('fs');

fs.copyFile('letter.txt', 'copiLetter.txt', err => {
    if (err) {
        console.log(err);
    }

    console.log('ya copio');
});