const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const Schema = mongoose.Schema;

// create user schema
const UserSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

 const newUserSchema = new Schema();
// modify a schema
 newUserSchema.add(UserSchema).add({
    hasPet: {
        type: Boolean
    }
 });

module.exports = mongoose.model('User', newUserSchema);