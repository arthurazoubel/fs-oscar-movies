const express = require('express');
const router = express.Router();
const moviesModel = require('../Models/moviesModel')
const {gettAllMovies, getSingleMovie, addNewMovie, updateMovie, deleteMovie} = require('../Controllers/moviesControllers')


router.get('/allmovies', gettAllMovies);

router.get('/:id', getSingleMovie);

router.post('/newmovie', addNewMovie);

router.put('/:id', updateMovie);

router.delete('/:id', deleteMovie);

module.exports = router