


process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
let output;
if(data === "pwd"){
 output = pwd;
 const pwd = require('./pwd');
}
else if (data === "cmd"){

const cmd = require('./cmd');
output = cmd;
}
  process.stdout.write('You current directory is ' + output);
  process.stdout.write('\nprompt > ');
});
