const mongoose = require('mongoose');

const seatSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    seatNumber: {
        type: String,
        required: true,
        trim: true
    },
    screenId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Screen',
        required: true
    },
});

module.exports = mongoose.model('Seat', seatSchema);