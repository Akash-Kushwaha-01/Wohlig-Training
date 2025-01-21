const express = require('express');
const app = express();
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

const Person = require('./models/person');


app.get('/', (req, res) => {
    res.send('Welcome to Hotel Management System');
})

app.post('/person', async (req, res) => {
    try {
        const data = req.body; //assuming request body contains person data.

        //create a new person document using mongoose model.
        const newPerson = new Person(data);

        // newPerson.name = data.name;
        // newPerson.age = data.age;
        // newPerson.work = data.work;
        // newPerson.email = data.email;
        // newPerson.salary = data.salary;

        // IF WE HAVE 500 FIELDS IT IS VERY DIFFICULT TO DO THIS PROCESS SO WE CAN DIRECTLY PASS THE DATA.

        //SAVE NEW PERSON INTO DATABASE:
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ err: 'Internal Error' });

    }
});


//GET: Get all person information:
app.get('/person', async (req, res) => {
    try {
        const allPersonData = await Person.find();
        console.log('Data Fetched');
        res.status(200).json({ allPersonData });

    }
    catch (err) {
        console.log(`Error:${err}`);
        res.status(500).json({ err: 'Internal Error' });
    }
});

app.listen(3000, () => {
    console.log('Listening Port on 3000');

});