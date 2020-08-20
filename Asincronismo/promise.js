
const promise = new Promise((res, rej) => {
    setTimeout( () => {
        (Math.random() < 0.5) ? res('hola') : rej(new Error('errir'));
    }, 200)
}) ;

promise.then(msg => msg.toUpperCase())
.then(msg => console.log('mensajes', msg))
.catch(err => console.log('err', err));