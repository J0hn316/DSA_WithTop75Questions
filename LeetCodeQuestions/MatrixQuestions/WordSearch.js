// Level Medium
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// Example:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

function exists(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  // Define DFS function
  const dfs = (row, col, index) => {
    // If index reaches the length of the word, we found the word
    if (index === word.length) return true;

    // Check boundary conditions and if the current cell matches the character
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== word[index]
    )
      return false;

    // Temporarily mark the current cell as visited
    const temp = board[row][col];
    board[row][col] = '#';

    // Explore in all four directions
    const found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);

    // Restore the current cell
    board[row][col] = temp;

    return found;
  };

  // Iterate through each cell in the grid and start DFS if the first character matches
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  // If no match found after DFS from all cells
  return false;
}

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
const word = 'ABCCED';
console.log(exists(board, word)); // Output: true
