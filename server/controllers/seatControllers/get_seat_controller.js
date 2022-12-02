const Seat = require('../../models/seat');

exports.get_seatById_controller = (req, res, next) => {
    Seat.find({_id: req.params.seatId}).exec().then(
        seat => {
            if(seat.length < 1){
                return res.status(404).json({
                    message: 'Seat not Found'
                });
            }
            else{
                res.status(200).json({
                    seatNumber: seat[0].seatNumber,
                    screenId: seat[0].screenId,                 
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
exports.get_allSeatsByScreen_controller = (req, res, next) => {
    Seat.find({screenId: req.params.screenId}).exec().then(
        seats => {
            if(seats.length < 1){
                return res.status(404).json({
                    message: 'No Seats'
                });
            }
            else{
                res.status(200).json({
                   seats              
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