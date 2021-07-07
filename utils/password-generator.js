const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const allNumbers = '0123456789';
const allSymbols = '!@#$%^&*_-+=';
const generatePassword = ({ length, save, numbers, symbols }) => {
  let chars = alpha;
  numbers ? (chars += allNumbers) : '';
  symbols ? (chars += allSymbols) : '';
  //   return password;

  let password = '';

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
};

module.exports = generatePassword;
