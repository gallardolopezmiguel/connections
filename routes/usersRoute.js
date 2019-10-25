const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userController');

//route  /users/register

router.post('/register', userController.createUser);
router.get('/', userController.getUsers);
router.post('/login', userController.login);

module.exports = router;
