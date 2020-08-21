const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', (req, res) => {
    res.send('hola mundo');
});

app.get('/json', (req, res) => {
    res.json({hello:'hola mundo'});
});

app.listen(config.port, () => {
    console.log('UP ', `${config.port}`);
});