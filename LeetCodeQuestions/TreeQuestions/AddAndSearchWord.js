// Level: Medium
// Design a data structure that supports adding new words and finding if a string matches any previously added string.
// Implement the WordDictionary class:
// 1) WordDictionary() Initializes the object.
// 2) addWord(word) Adds word to the data structure, it can be matched later.
// 3) search(word) Returns true if there is any string in the data structure that matches word or false otherwise.
//    word may contain dots '.' where dots can be matched with any letter.

class TrieNode {
  constructor() {
    (this.children = {}), (this.isEndOfWord = false);
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }
  addWord(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
  search(word) {
    return this.searchRecursive(word, this.root);
  }
  searchRecursive(word, node) {
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (char === '.') {
        for (let childNode of Object.values(node.children)) {
          if (this.searchRecursive(word.slice(i + 1), childNode)) return true;
        }
        // If no match found for any child node
        return false;
      } else {
        // If character not found in the trie
        if (!node.children[char]) return false;
      }
      node = node.children[char];
    }
    // Check if the current node marks the end of a word
    return node.isEndOfWord;
  }
}

let wordDictionary = new WordDictionary();
wordDictionary.addWord('apple');
wordDictionary.addWord('banana');
console.log(wordDictionary.search('apple')); // true
console.log(wordDictionary.search('app')); // false
console.log(wordDictionary.search('ban.')); // true
console.log(wordDictionary.search('banan.')); // false

// Explanation
// We define two classes: TrieNode to represent each node in the trie, and WordDictionary to manage the trie structure.
// In the addWord method, we iterate through each character of the word and create new nodes if necessary until we reach the end of the word,
// marking the last node as the end of a word.
// In the search method, we use recursion to traverse the trie based on the characters of the input word.
// If we encounter a '.', we recursively search all child nodes for the remaining part of the word. If the character is not '.',
// we continue traversing normally. If we reach the end of the word, we check if the current node marks the end of a word.
// Example usage demonstrates adding words to the dictionary and searching for words with or without wildcard characters ('.').
