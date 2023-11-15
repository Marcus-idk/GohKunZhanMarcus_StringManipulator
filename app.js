const s = require('./modules/GohKunZhanMarcus_Stringmanipulator');

let input = s.generateRandomString();
let valid = s.removeInvalidParentheses(input);
console.log(input);
console.log(valid[0]);
console.log(valid[1]);

// s.add("hilol");
// console.log(s.search("hilol"));
// console.log(s.search("hilol1"));
// s.add("1   ");
// console.log(s.search("1 "));
// console.log(s.search("1   "));