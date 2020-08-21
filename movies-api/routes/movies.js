const express =  require('express');
const { moviesMock } = require('../utils/mocks/movies');
const { restart } = require('nodemon');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    router.get('/', async (req, res, next) => {
        try {
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movies,
                messaje: 'movies all'
            });
        } catch (error) {
            next(error);
        }
    });
}

module.exports = moviesApi;