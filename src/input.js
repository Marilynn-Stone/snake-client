// import player movement inputs
const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// define user input
const handleUserInput = function(data) {
  if (data === '\u0003') process.exit();

  if (data === MOVE_UP_KEY) connection.write("Move: up");

  if (data === MOVE_LEFT_KEY) connection.write("Move: left");
  
  if (data === MOVE_DOWN_KEY) connection.write("Move: down");

  if (data === MOVE_RIGHT_KEY) connection.write("Move: right");

  if (data === 'i') connection.write("Say: That's Mine!");

  if (data === 'o') connection.write("Say: I'll get there first");

  if (data === 'p') connection.write("Say: Oh darn...");
};

module.exports = (setupInput);