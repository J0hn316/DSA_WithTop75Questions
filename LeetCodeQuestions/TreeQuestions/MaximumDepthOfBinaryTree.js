// Level Easy
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Example:
//  Input: [3,9,20,null,null,15,7]
//    3
//   / \
//  9  20
//    /  \
//   15   7
// Output: 3

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  // Base case: If root is null, depth is 0
  if (!root) return 0;

  // Recursively find the maximum depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the maximum depth of the left and right subtrees plus 1 (for the current node)
  return Math.max(leftDepth, rightDepth) + 1;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(maxDepth(root)); // Output: 3

//Explanation:

// We define a TreeNode class to represent each node of the binary tree.
// The maxDepth function takes the root of the binary tree as input and returns its maximum depth.
// In the function, we handle the base case where the root is null. If the root is null, the depth is 0.
// We recursively find the maximum depth of the left and right subtrees using DFS.
// We return the maximum depth of the left and right subtrees plus 1 (for the current node), using Math.max to determine the larger depth.
// Example usage demonstrates finding the maximum depth of a binary tree and logs the result to the console.
