const program = require('commander');
const generatePassword = require('./utils/password-generator');

program.version('1.0.0').description('Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to password.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

const { length, save, numbers, symbols } = program.opts();

const password = generatePassword({ length, save, numbers, symbols });
console.log(password);
