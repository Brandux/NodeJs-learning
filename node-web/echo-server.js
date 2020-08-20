const http = require('http');
const server = http.createServer();

server.on('request', (rqs, res)=> {
    if (rqs.method === 'POST' && rqs.url == '/echo') {
        let body = [];
        rqs.on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            body = Buffer.concat(body).toString();
            res.end(body);
        })
    } else {
        res.statusCode = 404;
        res.end();
    }
})

server.listen(8002);
console.log('servidor up port: 8002');


