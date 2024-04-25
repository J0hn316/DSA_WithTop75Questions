// Level Easy
// Given the root of a binary tree, invert the tree, and return its root.
// Example:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function invertTree(root) {
  // Base case: If root is null, return null
  if (!root) return null;

  // Swap the left and right children of the current node
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert the left and right subtrees
  invertTree(root.left);
  invertTree(root.right);

  return root;
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

console.log(invertTree(root));

// Explanation:

// We define a TreeNode class to represent each node of the binary tree.
// The invertTree function takes the root of the binary tree as input and returns the root of the inverted binary tree.
// In the function, we handle the base case where the root is null. If the root is null, we return null.
// We swap the left and right children of the current node by using a temporary variable.
// We recursively call the invertTree function on the left and right subtrees to invert them as well.
// Finally, we return the root of the inverted binary tree.
// Example usage demonstrates the inversion of a binary tree and logs the root of the inverted tree to the console.
