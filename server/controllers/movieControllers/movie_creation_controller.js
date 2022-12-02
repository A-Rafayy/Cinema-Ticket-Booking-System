const mongoose = require('mongoose');
const Movie = require('../../models/movies');

exports.movie_creation_controller = (req, res, next) => {
    Movie.find({movieName: req.body.movieName}).exec().then(
        movie => {
            if(movie.length >= 1) {
                return res.status(409).json({
                    message: 'This Movie already exists'
                })
            }
            else{
                const movie = new Movie({
                    _id: new mongoose.Types.ObjectId(),
                    movieName: req.body.movieName,
                    genre: req.body.genre,
                    duration: req.body.duration,
                    images: req.body.images,
                    language: req.body.language,
                    director: req.body.director,
                    cast: req.body.cast,
                    description: req.body.description,
                    releaseDate: req.body.releaseDate
                });
                movie.save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'Movie Created'
                    });
                })
                .catch(
                    error => {
                        console.log(error);
                        res.status(500).json({
                            error: error
                        });
                    }
                );
            }
        }
    );
}