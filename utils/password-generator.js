const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const allNumbers = '0123456789';
const allSymbols = '!@#$%^&*_-+=';
const generatePassword = ({ length, save, numbers, symbols }) => {
  let password = alpha;
  numbers ? (password += allNumbers) : '';
  symbols ? (password += allSymbols) : '';
  return password;
};

module.exports = generatePassword;
