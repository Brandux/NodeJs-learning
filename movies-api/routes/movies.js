const express =  require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesServices = new MoviesService;

    router.get('/', async (req, res, next) => {
        const {tags} = req.query;
        try {
            const movies = await Promise.resolve(moviesServices.getMovies({tags}));
            // throw new Error('Error getting movies');
            res.status(200).json({
                data: movies,
                messaje: 'movies all'
            });
        } catch (error) {
            next(error);
        }
    });

    router.get('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
    
        try {
          const movies = await moviesService.getMovie({ movieId });
    
          res.status(200).json({
            data: movies,
            message: 'movie retrieved'
          });
        } catch (err) {
          next(err);
        }
      });
    
      router.post('/', async function(req, res, next) {
        const { body: movie } = req;
        try {
          const createdMovieId = await moviesService.createMovie({ movie });
    
          res.status(201).json({
            data: createdMovieId,
            message: 'movie created'
          });
        } catch (err) {
          next(err);
        }
      });
    
      router.put('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
        const { body: movie } = req;
    
        try {
          const updatedMovieId = await moviesService.updateMovie({
            movieId,
            movie
          });
    
          res.status(200).json({
            data: updatedMovieId,
            message: 'movie updated'
          });
        } catch (err) {
          next(err);
        }
      });
    
      router.delete('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
    
        try {
          const deletedMovieId = await moviesService.deleteMovie({ movieId });
    
          res.status(200).json({
            data: deletedMovieId,
            message: 'movie deleted'
          });
        } catch (err) {
          next(err);
        }
      });
}

module.exports = moviesApi;