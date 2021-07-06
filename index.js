const program = require('commander');

program.version('1.0.0').description('Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to password.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .parse();

console.log(program.opts());
