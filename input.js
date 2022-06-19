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

  if (data === 'w') connection.write("Move: up");

  if (data === 'a') connection.write("Move: left");
  
  if (data === 's') connection.write("Move: down");

  if (data === 'd') connection.write("Move: right");

  if (data === 'i') connection.write("Say: That's Mine!");

  if (data === 'o') connection.write("Say: I'll get there first!");

  if (data === 'p') connection.write("Say: Oh darn...");
};

module.exports = (setupInput);