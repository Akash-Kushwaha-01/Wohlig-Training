const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        jobTitle: {
            type: String
        },
        gender: {
            type: String
        }
    },
    {
        timestamps: true
    }
);


// CREATING MODEL 
const User = mongoose.model("user", userSchema);

module.exports = User;