// import function to establish a connection to the server
const connect = require("./src/client");

// import function to handle user input
const setupInput = require("./src/input");

console.log("Connecting ...");

setupInput(connect());