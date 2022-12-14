const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    director: {
        type: String,
        required: true
    },

    length: {
        type: Number,
        required: true
    },

    storyline: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Movie', movieSchema)