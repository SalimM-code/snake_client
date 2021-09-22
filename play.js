
const { connect } = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', movementInput)
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {

  if(key === '\u0003') {
    process.exit();
  }
}
const movementInput = (key) => {
  if(key === 'w') {
    conn.write('Move: up');
  }
  if(key === 's') {
    conn.write('Move: down');
  }
  if(key === 'a') {

    conn.write('Move: left');
  }
  if((key === 'd')) {
    conn.write('Move: right');
  }
}

console.log("Connecting ...");
connect();
setupInput();

