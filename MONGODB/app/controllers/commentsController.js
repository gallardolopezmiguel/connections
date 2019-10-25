const Comment = require('../models/commentsModel');
const User = require('../models/userModel');

const addComment = (req, res) => {
    const saveComment = new Comment(req.body);
    saveComment.save()
    .then(comment => {
        User.populate(comment, {path: 'user'}, (err, data) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: 'We found some issues with the user stuff',
                    error: err
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Comment, Created!',
                    extraInfo: data
                });
            }
        });
    }).catch(err => {
        res.status(500).json({
        success: false,
        message: 'Something is not working',
        extraInfo: err
        });
    });
};

const getComments = (req, res) => {
    Comment.find((err, data) =>{
        if(err) {
            const error = {
                success: false,
                message: err
            };
            res.status(404).json(error);
        } else {
            User.populate(data, {path: 'user'}, (err, newData) => {
                if(err) {
                    res.status.json({
                        success: false,
                        error: err
                    });
                } else {
                    res.status(200).json({
                        success:true,
                        message: newData
                    });
                }
            });
        }
    });
};

module.exports = {
    addComment,
    getComments
}