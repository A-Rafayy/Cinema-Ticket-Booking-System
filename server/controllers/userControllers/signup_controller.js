const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

exports.signup_controller = (req, res, next) => {
    User.find({email: req.body.email}).exec().then(
        user => {
            if(user.length >= 1) {
                return res.status(409).json({
                    message: 'This email already exists'
                })
            }
            else{
                bcrypt.hash(req.body.password, 10, (error, hash) => {
                    if(error) {
                        return res.status(500).json({
                            error: error
                        });
                    }
                    else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            name: req.body.name,
                            email: req.body.email,
                            phone: req.body.phone,
                            password: hash
                        });
                        user.save()
                        .then(result => {
                            console.log(result);
                            res.status(201).json({
                                message: 'User Created'
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
                });
            }
        }
    );
}