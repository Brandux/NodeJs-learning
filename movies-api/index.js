const express = require('express');
const app = express();

const { config } = require('./config/index');
const  moviesApi  = require('./routes/movies');
const { logErrors, errorHandler } = require('./util/middleware/errorHandlers');

// body parser
app.use(express.json());

moviesApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
    console.log('UP ', `${config.port}`);
});