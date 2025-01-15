const User = require('../models/user')

async function handleGetAllUsers(req, res) {
    const allDBUser = await User.find({});
    return res.send(allDBUser);
}

async function handlegetUserById(req, res) {
    const allDBUser = await User.findById(req.params.id);
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    if (!allDBUser) return res.status(404).json({ error: "User not found!" });
    return res.json(allDBUser);
}

module.exports =
{
    handleGetAllUsers,
    handlegetUserById,

}