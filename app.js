const trie = require('./modules/GohKunZhanMarcus_Stringmanipulator');

// let input = s.generateRandomString();
// let valid = s.removeInvalidParentheses(input);
// console.log(input);
// console.log(valid[0]);
// console.log(valid[1]);

function testTrie() {
    // Test 1: Adding and Removing a Single Character Word
    trie.add('a');
    console.assert(trie.search('a') === true, 'Test 1.1 failed');
    trie.remove('a');
    console.assert(trie.search('a') === false, 'Test 1.2 failed');

    // Test 2: Adding Overlapping Words and Removing One
    trie.add('test');
    trie.add('testing');
    console.assert(trie.search('test') === true && trie.search('testing') === true, 'Test 2.1 failed');
    trie.remove('testing');
    console.assert(trie.search('test') === true && trie.search('testing') === false, 'Test 2.2 failed');

    // Test 3: Removing a Non-Existent Word
    trie.add('hello');
    trie.remove('world');
    console.assert(trie.search('hello') === true, 'Test 3 failed');

    // Test 4: Adding a Word and Removing Its Prefix
    trie.add('prefix');
    console.assert(trie.search('pre') === false, 'Test 4.1 failed');
    trie.remove('pre');
    console.assert(trie.search('prefix') === true, 'Test 4.2 failed');

    // Test 5: Adding a Word Twice and Removing Once
    trie.add('repeat');
    trie.add('repeat');
    trie.remove('repeat');
    console.assert(trie.search('repeat') === false, 'Test 5 failed');

    // Test 6: Adding and Removing Words with Special Characters
    trie.add('sp&cial');
    trie.add('sp@cial');
    console.assert(trie.search('sp&cial') === true && trie.search('sp@cial') === true, 'Test 6.1 failed');
    trie.remove('sp&cial');
    console.assert(trie.search('sp&cial') === false && trie.search('sp@cial') === true, 'Test 6.2 failed');

    // Test 7: Removing a Word That is a Substring of Another Word
    trie.add('sub');
    trie.add('substring');
    trie.remove('sub');
    console.assert(trie.search('sub') === false && trie.search('substring') === true, 'Test 7 failed');

    // Test 8: Adding Words that Share a Common Prefix and Removing One
    trie.add('common');
    trie.add('commute');
    trie.add('communication');
    trie.remove('commute');
    console.assert(trie.search('common') === true && trie.search('communication') === true && trie.search('commute') === false, 'Test 8 failed');

    // Test 9: Adding a Long Word and Removing it
    trie.add('averyverylongword');
    trie.remove('averyverylongword');
    console.assert(trie.search('averyverylongword') === false, 'Test 9 failed');

    // Test 10: Adding Words with Shared Substrings and Removing Them
    trie.add('shared');
    trie.add('sharing');
    trie.add('sharedmoment');
    trie.remove('shared');
    trie.remove('sharing');
    console.assert(trie.search('shared') === false && trie.search('sharing') === false && trie.search('sharedmoment') === true, 'Test 10 failed');

    console.log('All tests passed!');
}

// Run the test
testTrie();