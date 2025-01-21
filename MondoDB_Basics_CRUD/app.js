const express = require('express');
const app = express();
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

const Person = require('./models/person');
const MenuItem = require('./models/menu');

// IMPORT THE ROUTE FILES:
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);

app.listen(3000, () => {
    console.log('Listening Port on 3000');
});

