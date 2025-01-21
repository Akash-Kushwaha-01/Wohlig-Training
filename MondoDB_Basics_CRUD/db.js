const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/myDB_Practice';
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

db.on('error', () => {
    console.err('MongoDB connection error:', err);
})

db.on('disconnected', () => {
    console.log('MongoDB Disconnected');

})

//Export Database Connection:
module.exports = db;