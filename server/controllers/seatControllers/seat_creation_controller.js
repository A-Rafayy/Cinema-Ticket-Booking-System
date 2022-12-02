const mongoose = require('mongoose');
const Seat = require('../../models/seat');
const Screen = require('../../models/screen');


exports.seat_creation_controller = (req, res, next) => {
    Screen.find({screenId: req.body.screenId}).exec().then(
        screen => {
            if(screen.length < 1) {
                return res.status(404).json({
                    message: 'This Screan does not exists'
                })
            }
            else{
                Seat.find({seatNumber: req.body.seatNumber}).exec().then(
                    seat => {
                        if(seat.length >= 1) {
                            return res.status(409).json({
                                message: 'This Seat already exists'
                            })
                        }
                        else{
                            const seat = new Seat({
                                _id: new mongoose.Types.ObjectId(),
                                seatNumber: req.body.seatNumber,
                                screenId: req.body.screenId
                                
                            });
                            seat.save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: 'Seat Created'
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
        }
    );
}