const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
    userModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        hasPet: req.body.hasPet
    }, function(err, result){
        if(err) {
            res.status(401).json({
                sucess: false,
                message: 'Cannot create this user Yet, try another one',
                error: err
            });
        } else {
            res.status(200).json({
                sucess: true,
                message: result
            });
        }
    });
};

const getUsers = (req, res) => {
    userModel.find((err, data) => {
        if (err){
            res.status(404).json({
                success: false,
                message: err
            });
        } else {
            res.status(200).json({
                success: true,
                message: data
            });
        }
    });
};
const login = (req, res, next) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    // find user
    userModel.findOne({email: user.email}, function(err, userData){
        if(err || !userData) {
            const error = {
            success: false,
            error_msg: err,
            message: 'User not Found'
            };
            res.status(404).json(error);
        } else {
            // compare password
            if(bcrypt.compareSync(user.password, userData.password)) {
                res.status(200).json({
                    sucess: true,
                    message: 'Logged',
                    data: userData
                });
            } else {
                res.status(401).json({
                    sucess: false,
                    message: 'Incorrect Password'
                });
            }
        }
    });
};

module.exports = {
    createUser,
    getUsers,
    login
}