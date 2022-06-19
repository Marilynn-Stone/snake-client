const net = require("net");

// import connection constants
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // actions to be implemented when connection is established
  conn.on("data", (data) => {
    console.log(`${data}`);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
  });

  conn.on("connect", () => {
    conn.write("Name: MLS");
  });

  return conn;
};

module.exports = (connect);