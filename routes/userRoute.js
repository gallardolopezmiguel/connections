const express = require('express');
const router = express.Router();
const userController = require('../MONGODB/app/controllers/userController');

//route /users/register

router.post('/register', userController.createUser);

module.exports = router;
