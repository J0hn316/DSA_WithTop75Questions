// Level: Medium
// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean.
// The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
// The island is partitioned into a grid of square cells.
// You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west
// if the neighboring cell's height is less than or equal to the current cell's height.
// Water can flow from any cell adjacent to an ocean into the ocean.
// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci)
// to both the Pacific and Atlantic oceans.

const pacificAtlantic = (heights) => {
  if (!heights || !heights.length || !heights[0].length) return [];

  const m = heights.length;
  const n = heights[0].length;

  const canReachPacific = new Array(m)
    .fill(false)
    .map(() => new Array(n).fill(false));
  const canReachAtlantic = new Array(m)
    .fill(false)
    .map(() => new Array(n).fill(false));

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // Depth-first search to mark cells reachable from the ocean
  const dfs = (row, col, ocean) => {
    // Mark current cell as reachable
    ocean[row][col] = true;

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      // Check if new position is within bounds and has a height greater than or equal to current cell
      if (
        newRow >= 0 &&
        newRow < m &&
        newCol >= 0 &&
        newCol < n &&
        !ocean[newRow][newCol] &&
        heights[newRow][newCol] >= heights[row][col]
      ) {
        // Recursively explore neighboring cells
        dfs(newRow, newCol, ocean);
      }
    }
  };
  // Perform DFS from cells bordering the Pacific Ocean (left and top edges)
  for (let i = 0; i < m; i++) {
    // Left edge
    dfs(i, 0, canReachPacific);
    // Right edge
    dfs(i, n - 1, canReachAtlantic);
  }

  for (let j = 0; j < n; j++) {
    // Top edge
    dfs(0, j, canReachPacific);
    // Bottom edge
    dfs(m - 1, j, canReachAtlantic);
  }

  // Find intersection of cells reachable from both oceans
  const result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (canReachPacific[i][j] && canReachAtlantic[i][j]) {
        // Add cell to result if reachable from both oceans
        result.push([i, j]);
      }
    }
  }
  return result;
};

const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

console.log(pacificAtlantic(heights));

//This code first initializes two boolean matrices to mark cells reachable from the Pacific and Atlantic Oceans respectively.
//It then performs depth-first search (DFS) from cells bordering the Pacific Ocean (left and top edges) and from cells bordering the Atlantic Ocean (right and bottom edges).
// Finally, it finds the intersection of cells reachable from both oceans and returns the result.
