const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log('hola pluto');
}, 'pluto is deprecated. It is not a planet anymore.');
helloPluto();
// esto lo usamos para darle a entender al usuario que en ciertas funcionalidades en 
// un futuro pueden dejar de funcionar o quedar obsoleta a una version superior.