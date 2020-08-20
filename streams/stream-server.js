const fs = require('fs');
const server = require('http').createServer();

server.on('request', (rqs, res) => {
    const src = fs.createReadStream('./big');
    src.pipe(res);
});


server.listen(8001);

/* Streams es una coleccion de datos tal como lo son los arrays y las cadenas de texto,
 solo que en lugar de estar en su totalidad se van manejando pedazo por pedazo, 
esto hace que los streams sean verdaderamente poderisos, porque podemos manejar grandes cantidades de datos. */