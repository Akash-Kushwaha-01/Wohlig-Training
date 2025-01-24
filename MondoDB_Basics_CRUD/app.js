const express = require('express');
const app = express();
const db = require('./db')
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const passport = require('passport');
const session = require('express-session');
const localStrategy = require('passport-local').Strategy;

// IMPORT MODELS:
const Person = require('./models/person');
const MenuItem = require('./models/menu');

// IMPORT THE ROUTE FILES:
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Session Middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));

passport.use(new localStrategy(async (username, password, done) => {
    try {
        console.log(`Receive Credential: ${username} : ${password}`);
        const user = await Person.findOne({ username: username })
        if (!user) {
            return done(null, false, { message: 'Incorrect Username' });
        }
        const isUserPassword = user.password === password ? true : false;
        if (isUserPassword) {
            return done(null, user)
        }
        else {
            return done(null, false, { message: 'Incorrect Password' });
        }
    }
    catch (err) {
        return done(err);
    }
}));

// Add serialization methods for session support
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await Person.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

app.use(passport.initialize());
app.use(passport.session());

app.use('/', personRoutes);
app.use('/welcome', personRoutes);
app.use('/menu', menuRoutes);

app.listen(PORT, () => {
    console.log('Listening Port on 3000');
});