const Movie = require('../../models/movies');

exports.movie_deletion_controller = (req, res, next) => {
    Movie.remove({_id: req.params.movieId}).exec().then(
        result => {
            res.status(200).json({
                message: "Movie Deleted"
            });
        }
    ).catch(error => {
        console.log(error);
        res.status(500).json({
            error: error
        });
    });
}