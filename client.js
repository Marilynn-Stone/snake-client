const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // console.log incoming data
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