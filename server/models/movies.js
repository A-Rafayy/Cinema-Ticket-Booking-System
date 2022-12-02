const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    movieName: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true,
        trim: true
    },
    images: {
        type: [String],
        required: true,
        minLength: 1,
        maxLength: 10
    },
    language: {
        type: String,
        required: true,
        trim: true
    },
    director: {
        type: String,
        required: true,
        trim: true,
    },
    cast: {
        leadActor: {
            type: String,
            trim: true
        },
        leadActress: {
            type: String,
            trim: true
        },
        supportingCast: [String]
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    releaseDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Movie', movieSchema);