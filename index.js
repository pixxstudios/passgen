const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const generatePassword = require('./utils/password-generator');
const savePassword = require('./utils/save-password');

program.version('1.0.0').description('Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to password.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

const { length, save, numbers, symbols } = program.opts();

// generate password
const password = generatePassword({ length, save, numbers, symbols });

// save to file
if (save) {
  savePassword(password);
}

// copy to clipboard
clipboardy.writeSync(password);

console.log(chalk.green('Generated Password'), chalk.yellow(password));
console.log(chalk.cyan('Password copied to clipboard'));
