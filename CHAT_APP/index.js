// const http = require('http');
// const express = require('express');
// const path = require('path');

// // Import socket.io
// const { Server } = require("socket.io");
// const app = express();

// const server = http.createServer(app);
// app.use(express.static(path.resolve('./Public')));
// const io = new Server(server);

// // Handle socket.io connections
// io.on('connection', (client) => {
//     client.on('user-message', (message) => {
//         io.emit('message', message)
//     })
// });

// app.get('/', (req, res) => {
//     return res.sendFile(path.resolve('./Public/index.html'));
// });

// // Start the server
// server.listen(8000, () => {
//     console.log('Server started at Port Number 8000');
// });



const http = require("http");
const express = require("express");
const path = require("path");

// Import socket.io
const { Server } = require("socket.io");
const app = express();

const server = http.createServer(app);
app.use(express.static(path.resolve("./Public")));
const io = new Server(server);

// Handle socket.io connections
io.on("connection", (client) => {
    console.log("A user connected:", client.id);

    // Listen for chat messages
    client.on("chat-message", ({ username, message, timestamp }) => {
        console.log(`${username}: ${message} (${timestamp})`);

        // Broadcast the message to all connected clients
        io.emit("chat-message", { username, message, timestamp });
    });

    // Handle client disconnection
    client.on("disconnect", () => {
        console.log("User disconnected:", client.id);
    });
});

// Serve the HTML file
app.get("/", (req, res) => {
    return res.sendFile(path.resolve("./Public/index.html"));
});

// Start the server
server.listen(5000, () => {
    console.log("Server started at Port Number 5000");
});
