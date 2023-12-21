import { Router } from 'express';
import { createMovie, getAllMovies, getMovieById, getMoviesByUserId, updateMovie, deleteMovie, uploadImageWithCloudinary } from '../controllers/movies.controllers';
import { checkJwtMiddleware } from '../middlewares/checkJwt.middleware';

const moviesRoutes = Router();

moviesRoutes.get('/', getAllMovies);
moviesRoutes.get('/user/:userId', getMoviesByUserId);
moviesRoutes.get('/:movieId', getMovieById);
moviesRoutes.post('/:userId', createMovie);
moviesRoutes.post('/upload/image', uploadImageWithCloudinary);
moviesRoutes.patch('/:movieId', updateMovie);
moviesRoutes.delete('/:movieId', deleteMovie);

export default moviesRoutes;
