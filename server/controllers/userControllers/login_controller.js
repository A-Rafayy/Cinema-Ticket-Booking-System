const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

exports.login_controller = (req, res, next) => {
    User.find({ email: req.body.email }).exec().then(
        user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Authorization failed'
                });
            }
            else {
                bcrypt.compare(req.body.password, user[0].password, (error, result) => {
                    if (error) {
                        return res.status(401).json({
                            message: 'Authorization failed'
                        });
                    }
                    if (result) {
                        const token = jwt.sign(
                            {
                                email: user[0].email,
                                userId: user[0]._id
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "1h"
                            }
                        );
                        return res.status(200).json({
                            message: "Authorization Successful",
                            token: token,
                            userId: user[0]._id
                        })
                    }
                    else {
                        return res.status(401).json({
                            message: 'Authorization failed'
                        });
                    }
                })
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