const reservation = require('../../models/reservation');
const show = require('../../models/show');
const Show = require('../../models/show');

exports.get_showById_controller = (req, res, next) => {
    Show.find({_id: req.params.showId}).exec().then(
        show => {
            if(show.length < 1){
                return res.status(404).json({
                    message: 'Show not Found'
                });
            }
            else{
                res.status(200).json({
                    dateTime: show[0].dateTime,
                    movieId: show[0].movieId,
                    screenId: show[0].screenId,
                    ticketPrice: show[0].ticketPrice
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
exports.get_allShows_controller = (req, res, next) => {
    Show.find().exec().then(
        shows => {
            if(shows.length < 1){
                return res.status(404).json({
                    message: 'No Shows'
                });
            }
            else{
                res.status(200).json({
                   shows              
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
exports.get_available_seats_controller = (req, res, next) => {
    reservation.find({showBooked: req.params.showId}).exec().then(
        reservations => {
            var seatsArray = new Array();
            if(reservations.length < 1){
                res.status(200).json({
                         message: "All Seats are available"       
                 });
            }
            else{
                for(var i = 0; i < reservations.length; i++){
                    for(var j = 0; j < reservations[i].seatsReserved.length; j++){
                        seatsArray.push(reservations[i].seatsReserved[j])
                    }
                }
                seatsArray.sort()
                res.status(200).json({
                    seatsArray            
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