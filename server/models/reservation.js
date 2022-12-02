const mongoose = require('mongoose');
const Movie = require('./movies');
const User = require('./user');
const Showtime = require('./show');

const reservationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    showBooked: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Show',
        required: true,
    },
    seatsReserved: {
        type: [String],
        required: true,
        minLength: 1,
    },
    totalPrice: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Reservation', reservationSchema);