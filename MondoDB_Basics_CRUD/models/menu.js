const mongoose = require('mongoose');

// Define Menu Schema
const menuSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        taste: {
            type: String,
            enum: ['sweet', 'sour', 'spicy'],
            required: true
        },
        is_drink: {
            type: Boolean,
            default: false
        },
        ingredients: {
            type: [String],
            default: []
        },
        num_sales: {
            type: Number,
            default: 0
        }
    }
);


// Create Person Model
const menuItem = mongoose.model('MenuItem', menuSchema);

module.exports = menuItem;