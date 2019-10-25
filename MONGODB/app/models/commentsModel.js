const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    comment: {
        type: String,
    },
    stars: {
        type: Number
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Comment',Comment);