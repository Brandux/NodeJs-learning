const asyncCallback = (cb) => {
    setTimeout( () => {
        (Math.random() < 0.5) ? cb(null, 'hola') : cb(new Error('errir'));
    }, 200)
}

asyncCallback((err, msg) => {
    (err) ? console.log('errorr', err) : console.log('mensaje', msg);
});