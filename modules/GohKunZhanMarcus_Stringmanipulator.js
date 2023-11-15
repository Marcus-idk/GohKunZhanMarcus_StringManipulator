module.exports = {
    /**
        Parameters: null
        Return: random string, inclusive of parantheses
        Additional info: null
    **/
    generateRandomString() {
        const maxLength = 20;
        const brackets = '()';
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let randomString = '';
        const randomLength = Math.max(6, Math.floor(Math.random() * maxLength) + 1);

        for (let i = 0; i < randomLength; i++) {
            // 80% chance to append a parenthesis and 20% chance for a letter
            if (Math.random() < 0.8) {
                randomString += brackets.charAt(Math.floor(Math.random() * brackets.length));
            } else {
                randomString += characters.charAt(Math.floor(Math.random() * characters.length));
            }
        }

        return randomString;
    },

    /**
        Parameters: string s
        Return: bool
        Additional info: uses a simple counting method to validate if a string is valid
    **/
    isValid(s) {
        let c = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== '(' && s[i] !== ')') continue;
            if (s[i] === '(') c++;
            if (s[i] === ')') c--;
            if (c < 0) return false;
        }
        return c === 0;
    },
    /**
        Parameters: string s
        Return: [a, b] -> [min number of removals before string is valid, array of all valid string permutations]
        Additional info: removes min number of parentheses to make string valid
    **/
    // function to remove min number of parentheses to make string valid
    removeInvalidParentheses(s) {
        let foundMin = false;
        let res = [];
        let m = new Map();
        
        const isValid = this.isValid;

        function go(s, min, i) {
            if (min === 0) {
                if (isValid(s)) {
                    foundMin = true;
                    if (!m.has(s)) {
                        res.push(s);
                        m.set(s, true);
                    }
                }
                return;
            }

            if (i === s.length - 1) {
                s = s.slice(0, -1);
                if (isValid(s)) {
                    foundMin = true;
                    if (!m.has(s)) {
                        res.push(s);
                        m.set(s, true);
                    }
                }
                return;
            }

            go(s, min, i + 1);
            s = s.slice(0, i) + s.slice(i + 1);
            go(s, min - 1, i);
        }

        let min = 0;
        while (!foundMin) {
            go(s, min, 0);
            if (!foundMin) min++;
            m.clear();
        }

        return [min, res];
    },

    root: {
        children: {},
        isEndOfWord: false
    },
    /**
        Parameters: string word
        Return: null
        Additional info: adds word into the trie data structure, storing it for future reference
    **/
    add(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = { children: {}, isEndOfWord: false };
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    },
    /**
        Parameters: string word
        Return: bool
        Additional info: searches for word in the trie data structure in optimal time
    **/
    search(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    },
}