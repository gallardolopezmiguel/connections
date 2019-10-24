const userModel = require('../models/userModel');

const createUser = (req, res, next) => {
    userModel.create ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        hasPet: req.body.hasPet
    }, function(err, result) {
        if (err) {
            res.status(401).json({
                success: false,
                message : 'Cannot create this user yet, try another'
            });
        } else {
            res.status(200).json({
                success: true,
                message: result
            });
        }
    });
};
module.exports = {
    createUser 
}