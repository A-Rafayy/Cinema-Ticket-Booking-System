const mongoose = require('mongoose');
const Show = require('../../models/show');
const Movie = require('../../models/movies');
const Screen = require('../../models/screen');

exports.create_show_controller = (req, res, next) => {
    Show.find({_id: req.body._id}).exec().then(
        show => {
            if(show.length >= 1) {
                return res.status(409).json({
                    message: 'This Show already exists'
                })
            }
            else if(!MovieExists(req.body.movieId)){
                return res.status(404).json({
                    message: 'Movie does not exists'
                })
            }
            else if(!ScreenExists(req.body.ScreenId)){
                return res.status(404).json({
                    message: 'Screen does not exists'
                })
            }
            else{
                const show = new Show({
                    _id: new mongoose.Types.ObjectId(),
                    dateTime: req.body.dateTime,
                    movieId: req.body.movieId,
                    ScreenId: req.body.ScreenId,
                    tickectPrice: req.body.tickectPrice,
                });
                show.save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'Show Created'
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

MovieExists = (_id) => {
    Movie.findById(_id).exec().then(
        movie => {
            if(movie.length >= 1) {
                return false
            }
            else{
                return true
            }
        }
    );
}
ScreenExists = (_id) => {
    Screen.findById(_id).exec().then(
        screen => {
            if(screen.length >= 1) {
                return false
            }
            else{
                return true
            }
        }
    );
}