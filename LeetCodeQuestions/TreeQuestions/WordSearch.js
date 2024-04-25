// Level Hard
// Given an m x n board of characters and a list of strings words, return all words on the board.
// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.isEndOfWord = true;
  }
}

function findWords(board, words) {
  const result = [];
  const trie = new Trie();

  // Construct the trie from the list of words
  for (const word of words) {
    trie.insert(word);
  }

  const dfs = (node, i, j, path) => {
    if (node.isEndOfWord) {
      result.push(path);
      node.isEndOfWord = false; // Mark the word as found to avoid duplicates
    }

    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      board[i][j] === '#'
    ) {
      return;
    }

    const char = board[i][j];
    const nextNode = node.children.get(char);
    if (!nextNode) return;

    board[i][j] = '#'; // Mark the cell as visited

    dfs(nextNode, i + 1, j, path + char); // Down
    dfs(nextNode, i - 1, j, path + char); // Up
    dfs(nextNode, i, j + 1, path + char); // Right
    dfs(nextNode, i, j - 1, path + char); // Left

    board[i][j] = char; // Restore the cell
  };

  // Perform DFS traversal starting from each cell on the board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(trie.root, i, j, '');
    }
  }

  return result;
}

const board = [
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v'],
];
const words = ['oath', 'pea', 'eat', 'rain'];

console.log(findWords(board, words)); // Output:   ['oath','pea']

// Explanation:

// We define a TrieNode class to represent each node of the trie and a Trie class to represent the trie data structure.
// We construct the trie from the list of words provided as input.
// We define a depth-first search (DFS) function dfs to explore all possible paths on the board starting from each cell.
// At each step of the DFS, we check if the current path forms a valid word by traversing the trie.
// If a valid word is found, we add it to the result and mark it as found to avoid duplicates.
// We perform the DFS traversal starting from each cell on the board.
// Finally, we return the list of words found on the board.
