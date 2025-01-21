const express = require("express"); // Import the Express framework
const http = require("http"); // Import the HTTP module to create a server
const { Server } = require("socket.io"); // Import the Socket.IO server class
const cors = require("cors"); // Import CORS for handling cross-origin requests

const app = express(); // Initialize the Express app
app.use(cors()); // Allow cross-origin requests from any origin

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Initialize a Socket.IO server and configure CORS settings
const io = new Server(server, {
  cors: {
    origin: ["https://api.miladshahabi.de", "http://localhost:3000"], // Replace with allowed origins
    methods: ["GET", "POST"], // Allow GET and POST methods
  },
});

// Socket.IO event: Handle new client connections
io.on("connection", (socket) => {
  console.log(`A user connected: ${socket.id}`);

  // Handle the 'joinRoom' event: Join a specific room
  socket.on("joinRoom", (room) => {
    socket.join(room); // Add the client to the specified room
    console.log(`User joined room: ${room}`);
  });

  // Handle the 'disconnect' event: Log when a user disconnects
  socket.on("disconnect", () => {
    console.log(`A user disconnected: ${socket.id}`);
  });
});

// Timer interval in seconds
const TIMER_INTERVAL = 10; // The duration of the countdown (10 seconds)
let timer = TIMER_INTERVAL; // Initialize the timer

// Broadcast a random number and timer every second
setInterval(() => {
  if (timer === 0) {
    timer = TIMER_INTERVAL; // Reset the timer to the interval
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    io.to("randomNumbersRoom").emit("newNumber", { randomNumber, timer }); // Send the random number and timer to all clients in the room
  } else {
    timer--; // Decrease the timer
    io.to("randomNumbersRoom").emit("updateTimer", { timer }); // Send the updated timer to all clients
  }
}, 1000); // Execute the interval every 1 second

// Define the port on which the server will listen
const PORT = process.env.PORT || 3001;

// Start the server and log the URL
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});