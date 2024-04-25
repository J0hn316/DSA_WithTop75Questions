// Level Medium
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// Example:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    (this.val = val), (this.left = left), (this.right = right);
  }
}

function levelOrder(root) {
  // Return an empty array if the root is null
  if (!root) return [];

  // Array to store the level order traversal
  const result = [];

  // Queue to perform BFS, starting with the root node
  const queue = [root];

  while (queue.length > 0) {
    // Number of nodes at the current level
    const levelSize = queue.length;

    // Array to store nodes at the current level
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      // Dequeue the first node in the queue
      const node = queue.shift();

      // Push the value of the current node to the current level array.
      currentLevel.push(node.val);

      // Enqueue the left and right children of the current node if they exist.
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    // Push the current level array to the result array
    result.push(currentLevel);
  }
  return result;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const root1 = new TreeNode(1);
const root2 = new TreeNode([]);

console.log(levelOrder(root)); // Output: [[3],[9,20],[15,7]]
console.log(levelOrder(root1)); // Output: [[1]]
console.log(levelOrder(root2)); // Output: []

// Explanation:

// We define a TreeNode class to represent each node of the binary tree.
// The levelOrder function performs a BFS traversal of the binary tree.
// We initialize an empty array result to store the level order traversal.
// We initialize a queue with the root node.
// We iterate over the queue until it's empty, processing nodes level by level.
// In each iteration, we dequeue the nodes from the queue, push their values into the current level array,
// and enqueue their children (if they exist).
// After processing all nodes at the current level, we push the current level array into the result array.
// Finally, we return the result array containing the level order traversal of the binary tree.
