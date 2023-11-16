const s = require('./modules/GohKunZhanMarcus_Stringmanipulator');

let input = s.generateRandomString();
let valid = s.removeInvalidParentheses(input);
console.log(input);
console.log(valid[0]);
console.log(valid[1]);

s.add("hello");
s.add("HellO");
console.log(s.search("hello"));
console.log(s.search("HellO"));
console.log(s.search("HELLO"));
s.remove("hello");
console.log(s.search("hello"));
console.log(s.search("HellO"));
console.log(s.search("HELLO"));