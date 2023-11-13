module.exports = {
    root: {
        children: {},
        isEndOfWord: false
    },

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