// import connect from client
const connect = require("./client");

const setupInput = require("./input");

console.log("Connecting ...");

connect();

setupInput();