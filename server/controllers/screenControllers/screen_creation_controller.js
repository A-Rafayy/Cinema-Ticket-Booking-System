const mongoose = require('mongoose');
const Screen = require('../../models/screen');

exports.create_screen_controller = (req, res, next) => {
    Screen.find({screenName: req.body.screenName}).exec().then(
        screen => {
            if(screen.length >= 1) {
                return res.status(409).json({
                    message: 'This Screen already exists'
                })
            }
            else{
                const screen = new Screen({
                    _id: new mongoose.Types.ObjectId(),
                    screenName: req.body.screenName,
                    screenType: req.body.screenType,
                    allSeats: req.body.allSeats,
                    totalSeats: req.body.totalSeats,
                    seatsAvailable: req.body.seatsAvailable,
                    images: req.body.images,
                });
                screen.save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'Screen Created'
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