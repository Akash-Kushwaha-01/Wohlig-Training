const User = require('../models/user');

// Get all users
async function handleGetAllUsers(req, res) {
    console.log("in here")
    try {
        const allDBUsers = await User.find({});
        return res.json(allDBUsers);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to fetch users" });
    }
}

// Get user by ID
async function handleGetUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found!" });
        }
        return res.json(user);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to fetch user" });
    }
}

// Create a new user
async function createUserById(req, res) {
    const body = req.body; // Destructure the request body
    // console.log(body); // Log to confirm the incoming data

    try {
        const newUser = await User.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            gender: body.gender,
            jobTitle: body.jobTitle,
        });

        return res.status(201).json({
            msg: "User created successfully",
            user: newUser,
        });
    } catch (err) {
        console.error(err);

        // Handle unique email error
        if (err.code === 11000) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // Handle validation errors and others
        return res.status(500).json({
            error: "Failed to create user",
            details: err.message,
        });
    }
}



// Update user by ID
async function updateUserById(req, res) {
    const id = req.params.id;
    const body = req.body;
    console.log(body);

    try {
        const updatedUser = await User.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json({ status: "success", updatedUser });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to update user" });
    }
}

// Delete user by ID
async function deleteUserById(req, res) {
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json({ status: "success", deletedUser });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to delete user" });
    }
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    createUserById,
    updateUserById,
    deleteUserById,
};
