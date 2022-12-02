const User = require('../../models/user');

exports.user_info_controller = (req, res, next) => {
    User.find({_id: req.params.userId}).exec().then(
        user => {
            if(user.length < 1){
                return res.status(404).json({
                    message: 'User not Found'
                });
            }
            else{
                res.status(200).json({
                    name: user[0].name,
                    email: user[0].email,
                    phone: user[0].phone
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