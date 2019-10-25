const express = require('express');
const router = express.Router();
const commentsController = require('../app/controllers/commentsController');

router.get('/', commentsController.getComments);
router.post('/add', commentsController.addComment);

module.exports = router;