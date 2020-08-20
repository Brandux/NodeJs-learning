const fs = require('fs');
const server = require('http').createServer();

server.on('request', (rqs, res) => {
    fs.readFile('./big', (err, data) => {
        (err) ? console.log('error', err) : '';
        res.end(data);
    });
});


server.listen(8001);