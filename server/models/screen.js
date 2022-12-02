const mongoose = require('mongoose');
const Seat = require('./seat');

const screenSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    screenName:{
        type: String,
        required: true,
        trim: true
    },
    screenType: {
        type: String,
        trim: true
    },
    // allSeats: [
    //     {
    //         seat: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: 'Seat',
    //             required: true
    //         }
    //     },
    //     minLength: 1
    // ],
    allSeats: [
        {
            _id: mongoose.Schema.Types.ObjectId,
            seatNumber: {
                type: String,
                required: true,
                trim: true
            },
        },
    ],
    // {
    //     type: [mongoose.Schema.Types.ObjectId],
    //     required: true,
    //     minLength: 1,
    //     maxLength: 40
    // },
    totalSeats: {
        type: Number,
        required: true
    },
    seatsAvailable: {
        type: Number,
        required: true,
    },
    images: {
        type: [String],
        required: true,
        minLength: 1
    },
});

module.exports = mongoose.model('Screen', screenSchema);