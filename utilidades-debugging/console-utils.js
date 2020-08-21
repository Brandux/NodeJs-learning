
/* 

util.format()
El método util.format () devuelve una cadena formateada utilizando el primer argumento como una cadena de formato tipo printf que puede contener cero o más especificadores de formato. Cada especificador se reemplaza con el valor convertido del argumento correspondiente. Los especificadores compatibles son:

%s - String
%d - Number
%i - parseInt(value, 10)
%f - parseFloat(value)
%j - JSON
%o - Object
%c - Css
%% - signo de '%'

*/

console.log('Un %s y  un %s', 'perrto', 'gatito');
console.info("hola");
console.warn('alerta');

/// para hace pruebas pequeñas de exttracaytos de codigo podemos usart

console.assert(42 === '42');

// nos dice donde sale el erro
console.trace("hellor");

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('hola de foo');


// solo funciona si pasamos la variable de entorno
// NODE_DEBUG = foo node console-utils.js