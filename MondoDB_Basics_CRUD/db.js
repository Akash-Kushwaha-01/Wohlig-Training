const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURL = process.env.MongoDB_URL_Local;
const mongoURL = process.env.MongoDB_URL;

mongoose
    .connect(mongoURL)
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(`Error:${err}`)
    );

//Set Up Mongoose Connection.
const db = mongoose.connection;

// Define Event Listener for DataBase Connection
db.on('connected', () => {
    console.log('Connected to MongoDB Server');
})

db.on('error', (ERROR) => {
    console.log('MongoDB connection error:', ERROR);
})

db.on('disconnected', () => {
    console.log('MongoDB Disconnected');

})

//Export Database Connection:
module.exports = db;