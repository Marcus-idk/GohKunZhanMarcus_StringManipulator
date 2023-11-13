const stringmanipulator = require('./modules/GohKunZhanMarcus_Stringmanipulator');
const trie = require('./modules/GohKunZhanMarcus_Trie');

let input = stringmanipulator.generateRandomString();
let valid = stringmanipulator.removeInvalidParentheses(input);
console.log(input);
console.log(valid[0]);
console.log(valid[1]);

// trie.add("hilol");
// console.log(trie.search("hilol"));
// console.log(trie.search("hilol1"));
// trie.add("1   ");
// console.log(trie.search("1 "));
// console.log(trie.search("1   "));