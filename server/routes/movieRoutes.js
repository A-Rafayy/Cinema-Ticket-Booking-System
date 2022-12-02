const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Movie = require('../models/movies');
const verification = require('../middleware/user_token-authentication');

const createMovieController = require('../controllers/movieControllers/movie_creation_controller');
const getMovieController = require('../controllers/movieControllers/get_movie_controller');
const updateMovieController = require('../controllers/movieControllers/movie_update_controller');
const deleteMovieController = require('../controllers/movieControllers/movie_deletion_controller');

router.get('/', getMovieController.get_allMovies_controller);
router.get('/:movieId', getMovieController.get_movieById_controller);

router.post('/create', verification, createMovieController.movie_creation_controller);

router.put('/update/:movieId', verification, updateMovieController.movie_update_controller);

router.delete('/delete/:movieId', verification, deleteMovieController.movie_deletion_controller);

module.exports = router;