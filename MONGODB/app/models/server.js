const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/usersRoute');
const commentsRoutes = require('./routes/commentsRoute');
const app = express();
// middlewares
app.use(cors());
app.use(bodyParser.json());

// connect to Mongo
mongoose.connect('mongodb://127.0.0.1:27017/users',
{ useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB Connection established Successfully');
});

//add user as base route
app.use('/users', userRoutes);
app.use('/comments', commentsRoutes);

// Create server
app.listen(3000, () => {
    console.log('Server is running in port 3000');
});