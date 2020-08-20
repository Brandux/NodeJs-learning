const  os  = require('os');
// para conocer los cpus
console.log('CPU info', os.cpus());
// para mostrar las ip que tiene el ordenador
console.log('IP address', os.networkInterfaces().Ethernet.map(i => i.address));
// para mostrar la memoria libre que tiene el ordenador
console.log('MEmoria libre', os.freemem());
// tipo de sistema operativo
console.log('Tipo', os.type());
// conocer la version os
console.log('SO version', os.release());
// conocer la informacion del usario.
console.log('info', os.userInfo());