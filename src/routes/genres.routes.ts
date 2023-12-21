import { Router } from 'express';
import { createGenre, getAllGenres, deleteGenre } from '../controllers/genres.controllers';

const genresRoutes = Router();

genresRoutes.get('/', getAllGenres);
genresRoutes.post('/', createGenre);
genresRoutes.delete('/:genreId', deleteGenre);

export default genresRoutes;
