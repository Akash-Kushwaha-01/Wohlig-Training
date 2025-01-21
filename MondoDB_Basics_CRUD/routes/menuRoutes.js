const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu');
const menuItem = require('../models/menu');
//GET ALL MENU ITEM:

router.get('/', async (req, res) => {
    try {
        let allItem = await MenuItem.find();
        console.log('Menu Data Fetched');
        res.status(200).json({ allItem });

    }
    catch (err) {
        console.log(`ERROR:${err}`);
        res.status(500).json({ err: "Internal Error" })
    }
})


router.post('/', async (req, res) => {
    try {
        let data = req.body;
        const AddMenu = new MenuItem(data);
        const saved = await AddMenu.save();
        console.log('Item Added Successfully');

        res.status(200).json({ saved })
    }
    catch (err) {
        console.log(`ERROR: ${err}`);
        res.status(500).json({ err: "Internal Error" });
    }
})

router.get('/:taste', async (req, res) => {
    try {
        tasteType = req.params.taste;
        if (tasteType === 'sweet' || tasteType === 'sour' || tasteType === 'spicy') {
            let response = await MenuItem.find({ taste: tasteType })
            console.log('Data fetched');
            res.status(200).json({ response });
        }
        else {
            res.status(404).json({ Error: 'Data is not found' });
        }

    }
    catch (err) {
        console.log(`Error: ${err}`);
        res.status(500).json(`${err}:Internal Error!`);

    }
})

module.exports = router;
