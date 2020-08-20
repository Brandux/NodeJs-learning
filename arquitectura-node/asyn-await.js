
const promiseFn = () => new Promise((res, rej) => {
    setTimeout( () => {
        (Math.random() < 0.5) ? res('hola') : rej(new Error('errir'));
    }, 12)
}) ;

async function asyncAwait () {
    try {
        const resul = await promiseFn();
        console.log('msg', resul);
    } catch (error) {
        console.log('errir', error);
    }

}

asyncAwait();