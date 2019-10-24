const express = require ('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// connect to Mongo
mongoose.connect('mongodb://127.0.0.1:27017/users');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB Connection established Successfully')
});

// add user as base route
app.use('/users', userRoutes);

// Create server
app.listen(3000, () => {
    console.log('Server is running in port 3000');
});