const http = require('http');
const server = http.createServer();

server.on('request', (rqs, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hola brandux');
})

server.listen(8001);
console.log('servidor up port: 8001');