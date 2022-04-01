// IMPORT PACKAGES
const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');


// CONFIG MONGOOSE
require("./server/config/mongoose.config");

// CONFIG EXPRESS
// app.use(cors()) // Having 2 localhost port to communicate
app.use(cors({
    credentials: true, 
    origin: 'http://localhost:3000'
}));
app.use(express.json())  // POST METHOD
app.use(cookieParser());
// Change the app.use(cors()) to the one below

// ROUTES
require("./server/routes/user.routes")(app)

// PORT
const server = app.listen(8000, () => console.log(`Listening on port: 8000`) );

const io = require('socket.io')(server, { cors: true });


io.on("connection", socket => {

    console.log(socket.id);
    
    
    // listen for a client event
    
    socket.on("chat", (client_input) => {
    
    console.log("got a message", client_input);
    
    
    // emit this back to the client / everyone
    
    io.emit('post chat', client_input)
    
    }),
    
    
    
    // listen for a client event
    
    socket.on("chat2", (client_input) => {
    
    console.log("got a message", client_input);
    
    
    // emit this back to the client / everyone
    
    io.emit('post chat2', client_input)
    
    }),

    // listen for a client event
    
    socket.on("chat3", (client_input) => {
    
        console.log("got a message", client_input);
        
        
        // emit this back to the client / everyone
        
        io.emit('post chat3', client_input)
        
        })


});
