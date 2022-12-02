const Reservation = require('../../models/reservation');
const Show = require('../../models/show');

exports.get_reservationByUser_controller = (req, res, next) => {
    Reservation.find({user: req.params.userId}).exec().then(
        reservation => {
            if(reservation.length < 1){
                return res.status(404).json({
                    message: 'No Reservations'
                });
            }
            else{
                res.status(200).json({
                    reservation
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