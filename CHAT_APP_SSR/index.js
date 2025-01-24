const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Render the chat page
app.get("/", (req, res) => {
    res.render("index", { title: "Two-Panel Chat App" });
});

// Handle Socket.IO connections
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Handle incoming chat messages
    socket.on("chat-message", ({ sender, message, timestamp }) => {
        console.log(`${sender}: ${message} (${timestamp})`);

        // Broadcast the message to all connected clients
        io.emit("chat-message", { sender, message, timestamp });
    });

    // Handle user disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// Start the server
const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
