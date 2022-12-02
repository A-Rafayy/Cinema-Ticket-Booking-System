const mongoose = require('mongoose');

const showSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    dateTime:
        {
            date: {
                type: Date,
                required: true,
            },
            startTime: {
                type: Date,
                required: true,
            },
            endTime: {
                type: Date,
                required: true,
            }
        },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    screenId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Screen',
        required: true
    },
    tickectPrice: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Show', showSchema);