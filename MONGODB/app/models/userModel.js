const mongoose = require('mongoose');

const schema = mongoose.Schema;

// create user schema
const UserSchema = new schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const newUserSchema = new schema();
// modify a schema
newUserSchema.add(UserSchema).add({
    hasPet: {
        type: Boolean
    }
});

module.exports = mongoose.model('User', newUserSchema);