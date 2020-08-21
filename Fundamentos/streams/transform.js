const { Transform } = require('stream');

const transformSteam =  new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(transformSteam).pipe(process.stdout);