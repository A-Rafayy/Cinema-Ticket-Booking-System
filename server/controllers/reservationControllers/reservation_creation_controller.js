const express = require('express');
const mongoose = require('mongoose');
const reservation = require('../../models/reservation');
const Reservation = require('../../models/reservation');
const Show = require('../../models/show');

exports.create_reservation_controller = (req, res, next) => {
    Show.find({_id: req.body.showId}).exec().then(
        show => {
            if(show.length < 1) {
                return res.status(404).json({
                    message: 'This Show does not exists'
                })
            }
            else if(show.dateTime.date < Date()) {
                return res.status(409).json({
                    message: 'The date of this show has passed'
                })
            }
            else if(show.dateTime.date == Date()) {
               if(show.dateTime.startTime < Date() && show.dateTime.endTime > Date()) {
                return res.status(409).json({
                    message: 'The Show has already started'
                })
               }
               else if(show.dateTime.endTime < Date()){
                return res.status(409).json({
                    message: 'The Show has finished'
                })
               }
            }
            else{
                var success = true;
                for(var i = 0; i < req.body.seats.length; i++){
                    Reservation.find({seats: {_id: req.body.seats[i]._id}}).exec().then(
                        reservation => {
                            if(reservation.length >= 1){
                                success = false;
                                return res.status(409).json({
                                    message: `The seat number ${req.body.seats[i]} is already booked`
                                })
                            }
                        }
                    )
                }
                if(success){
                    const reservation = new Reservation({
                        _id: new mongoose.Types.ObjectId(),
                        user: req.body.user,
                        showBooked: req.body.showBooked,
                        seatsReserved: req.body.seatsReserved,
                        totalPrice: req.body.totalPrice
                    });
                    reservation.save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'Reservation Created'
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
        }
    );
}