const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.get('/hotel', (req, res) => {
    res.send('Welcome to Hotel Management System');
})

router.post('/', async (req, res) => {
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
router.get('/', async (req, res) => {
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


//FIND PERSON BY THEIR WORKTYPE:
router.get('/:worktype', async (req, res) => {
    try {
        const workType = req.params.worktype;
        if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
            const response = await Person.find({ work: workType });
            console.log('Data Fetched');
            res.status(200).json({ response });
        }
        else {
            res.status(404).json({ error: 'Invalid work type!' });

        }
    }
    catch (err) {
        console.log(`ERROR: ${err}`);
        res.status(500).json(`${err}: Internal Error`);

    }
});

module.exports = router; 