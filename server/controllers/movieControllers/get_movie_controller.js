const Movie = require('../../models/movies');

exports.get_movieById_controller = (req, res, next) => {
    Movie.find({_id: req.params.movieId}).exec().then(
        movie => {
            if(movie.length < 1){
                return res.status(404).json({
                    message: 'Movie not Found'
                });
            }
            else{
                res.status(200).json({
                    movieName: movie[0].movieName,
                    genre: movie[0].genre,
                    duration: movie[0].duration,
                    images: movie[0].images,
                    language: movie[0].language,
                    director: movie[0].director,
                    cast: movie[0].cast,
                    description: movie[0].description,
                    releaseDate: movie[0].releaseDate
                    
                });
            }
        }
    ).catch(
        error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        }
    );
}
exports.get_allMovies_controller = (req, res, next) => {
    Movie.find().exec().then(
        movies => {
            if(movies.length < 1){
                return res.status(404).json({
                    message: 'No Movies found'
                });
            }
            else{
                res.status(200).json({
                   movies          
                });
            }
        }
    ).catch(
        error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        }
    );
}