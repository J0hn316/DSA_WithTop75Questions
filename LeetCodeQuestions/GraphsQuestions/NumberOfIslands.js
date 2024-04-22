// Level: Medium
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

const numIsLands = (grid) => {
  if (!grid || !grid.length || !grid[0].length) return 0;

  const m = grid.length;
  const n = grid[0].length;
  let count = 0;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // Depth-first search to mark connected land cells as visited
  const dfs = (row, col) => {
    // Base case: return if cell is out of bounds or not land
    if (row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === '0') {
      return;
    }
    // Mark current cell as visited
    grid[row][col] = '0';

    // Explore neighboring cells recursively
    for (const [dx, dy] of directions) {
      dfs(row + dx, col + dy);
    }
  };

  // Iterate through each cell in the grid
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // If current cell is land ('1'), increment island count and perform DFS to mark connected land cells
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};

const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIsLands(grid)); // Output: 3

// In this implementation:

// We define a function dfs to perform depth-first search from a given cell (row, col).
// We iterate through each cell in the grid, and if we encounter a land cell that hasn't been visited, we increment the island count and perform DFS to mark all connected land cells as visited.
// After traversing the entire grid, the count represents the number of islands present.
