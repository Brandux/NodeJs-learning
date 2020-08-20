// usamos eventos

const EventEmm = require('events');

class Logger extends EventEmm {
    execute(cb){
        console.log('before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('after');
    }
}

const logger = new Logger();

logger.on('start', () => console.log('starting'));
logger.on('finish', () => console.log('finish'));
logger.on('finish', () => console.log('donde'));


// logger.execute(() => console.log('hola'));
logger.execute(() => setTimeout(()=> console.log('holi')), 400);