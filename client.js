
const { ClientRequest } = require("http");
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
    
  });

  // handling data from serve
  conn.on('data', (data) => {
    console.log('serve says: ', data)
  })
// print a msg as soon as connection is successful
  conn.on('connect', () => {
    conn.write('Successfully connected to game server');
    conn.write('Name: sm8');
    
  })
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = {
  connect,

};