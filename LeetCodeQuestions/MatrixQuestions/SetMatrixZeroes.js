// Level: Medium
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// Examples:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

function setZeros(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rowsToZero = new Set();
  const colsToZero = new Set();

  // Step 1: Find zeros and mark corresponding rows and columns
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        rowsToZero.add(i);
        colsToZero.add(j);
      }
    }
  }
  // Step 2: Set elements in marked rows and columns to zero
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (rowsToZero.has(i) || colsToZero.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

const matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log(setZeros(matrix1)); // Output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
