const mongoose = require('mongoose');

const { Schema } = mongoose;

const schoolSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    region: {
        type: String,
    }
})

const School = mongoose.model('School', schoolSchema);

module.exports = School;
