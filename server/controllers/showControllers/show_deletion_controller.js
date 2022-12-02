const Show = require('../../models/show');

exports.show_deletion_controller = (req, res, next) => {
    Show.remove({_id: req.params.showId}).exec().then(
        result => {
            res.status(200).json({
                message: "Show Deleted"
            });
        }
    ).catch(error => {
        console.log(error);
        res.status(500).json({
            error: error
        });
    });
}