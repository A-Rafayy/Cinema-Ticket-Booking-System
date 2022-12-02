const Screen = require('../../models/screen');

exports.get_screenById_controller = (req, res, next) => {
    Screen.find({_id: req.params.screenId}).exec().then(
        screen => {
            if(screen.length < 1){
                return res.status(404).json({
                    message: 'Screen not Found'
                });
            }
            else{
                res.status(200).json({
                    screenName: screen[0].screenName,
                    screenType: screen[0].screenType,
                    allSeats: screen[0].allSeats,
                    totalSeats: screen[0].totalSeats,
                    seatsAvailable: screen[0].seatsAvailable,
                    images: screen[0].images,                   
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
exports.get_allScreens_controller = (req, res, next) => {
    
}