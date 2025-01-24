const express = require('express');
const router = express.Router();
const Person = require('../models/person');
const { find } = require('../models/menu');

router.get('/welcome', async (req, res) => {
    try {
        res.status(200).json('Welcome to Hotel Managment');
    }
    catch (err) {
        res.status(500).json({ ERROR: err });
    }
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


//UPDATE:
router.put('/:id', async (req, res) => {
    try {
        const findId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(findId, updatedPersonData, { new: true, runValidators: true });

        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('Data Updated');
        res.status(200).json({ response });
    }
    catch (err) {
        console.log(`ERROR: ${err}`);
        res.status(500).json(`${err}: Internal Server Error`);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const findId = req.params.id;
        const response = await Person.findByIdAndUpdate(findId);

        if (!response) {
            return res.status(404).json({ error: "Id is not found" });
        }

        console.log('Data Deleted!');

    }
    catch (err) {
        console.log(`ERRO: ${err}`);
        res.status(500).json(`${err}: Internal Error`);

    }
})

module.exports = router; 