const stringmanipulator = require('./GohKunZhanMarcus_Stringmanipulator');
let input = stringmanipulator.generateRandomString();
let valid = stringmanipulator.removeInvalidParentheses(input);
console.log(input);
console.log(valid[0]);
console.log(valid[1]);