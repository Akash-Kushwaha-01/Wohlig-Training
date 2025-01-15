const express = require("express");
const router = express.Router();
const { handleGetAllUsers } = require('../controller/user')
const { handlegetUserById } = require('../controller/user')
// router.get('/users', (req, res) => {
//     const html = `
//     <table border="1" style="border-collapse: collapse; width: 100%;">
//         <thead>
//             <tr>
//                 <th>Serial Number</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Email</th>
//                 <th>Gender</th>
//                 <th>Job Title</th>
//             </tr>
//         </thead>
//         <tbody>
//             ${users
//                 .map(
//                     (user, index) => `
//                 <tr>
//                     <td>${index + 1}</td>
//                     <td>${user.first_name}</td>
//                     <td>${user.last_name}</td>
//                     <td>${user.email}</td>
//                     <td>${user.gender}</td>
//                     <td>${user.job_title}</td>
//                 </tr>
//             `
//                 )
//                 .join('')}
//         </tbody>
//     </table>
//     `;
//     res.send(html);
// });

// REST API WITH CSR:



//GET

// router.get("/users", async (req, res) => {
//     const allDBUser = await User.find({});
//     const html = `
//     <ul>
//       ${allDBUser
//             .map((user) => `<li> ${user.firstName} - ${user.email} </li>`)
//             .join('')
//         }
//     </ul>
//     `;
//     return res.send(html);
// });

router.get("/", handleGetAllUsers);

router.get("/:id", handlegetUserById);

//POST

// router.post(`/api/users`, (req, res) => {
//   //TODO: Create new user
//   const body = req.body;
//   if (
//     !body ||
//     !body.first_name ||
//     !body.last_name ||
//     !body.email ||
//     !body.gender ||
//     !body.job_title
//   ) {
//     return res.status(400).json("All fields are required");
//   }
//   // console.log("Body ", body);
//   users.push({ ...body, id: users.length + 1 });
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     return res.status(201).json({ status: "success", id: users.length });
//   });
// });

//USING MONDODB: POST

router.post(`/`, async (req, res) => {
    //TODO: Create new user
    const body = req.body;
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json("All fields are required");
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    })
    console.log(result);

    return res.status(201).json({ msg: "Success" });
});

//PUT

router.put("/", (req, res) => {
    const id = Number(req.params.id); // Convert id to a number
    const body = req.body;
    const findUserIndex = users.findIndex((user) => user.id === id); // Find the user index
    console.log(findUserIndex);
    if (findUserIndex === -1) {
        // User not found
        return res.status(404).json({ error: "User not found" });
    }
    // Update the user by merging the old data with new data
    users[findUserIndex] = { ...users[findUserIndex], ...body };
    // Save the updated data to the file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ error: "Failed to update user" });
        }
        return res.json({ status: "success", updatedUser: users[findUserIndex] });
    });
});

//DELETE

// router.delete("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const findUserIndex = users.findIndex((user) => user.id === id);

//   if (findUserIndex === -1) {
//     return res.status(404).json({ error: "User not found" });
//   }

//   // Remove the user from the array
//   users.splice(findUserIndex, 1);

//   // Save changes to the file
//   fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
//     if (err) {
//       return res.status(500).json({ error: "Failed to delete user" });
//     }
//     return res.json({ status: "success", deletedId: id });
//   });
// });


// DELETE WITH MONGODB

router.delete("/", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json('Success');
});

module.exports = router