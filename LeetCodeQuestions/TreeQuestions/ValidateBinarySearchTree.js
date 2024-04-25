// Level Medium
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// Examples:
// Input: root = [2,1,3]
// Output: true
// Input: root = [5,1,4,null,null,3,6]
// Output: false

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  // Helper function for in-order traversal
  const inOrderTraversal = (node, prev) => {
    if (!node) return true; // Base case: If node is null, return true

    // Recursively traverse the left subtree
    if (!inOrderTraversal(node.left, prev)) return false;

    // Check if the current node value is greater than the previous node value
    if (prev !== null && node.val <= prev.val) return false;
    prev = node;

    // Recursively traverse the right subtree
    return inOrderTraversal(node.right, prev);
  };

  // Start the in-order traversal from the root node
  return inOrderTraversal(root, null);
}

const root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(3);

console.log(isValidBST(root1)); // Output: true

const root2 = new TreeNode(5);
root2.left = new TreeNode(1);
root2.right = new TreeNode(4);
root2.right.left = new TreeNode(3);
root2.right.right = new TreeNode(6);

console.log(isValidBST(root2)); // Output: false

// Explanation:

// We define a TreeNode class to represent each node of the binary tree.
// The isValidBST function checks if the binary tree root is a valid binary search tree (BST) by performing an in-order traversal of the tree.
// We define a helper function inOrderTraversal to perform the in-order traversal recursively. It takes the current node and the previous node as arguments.
// During the traversal, we recursively traverse the left subtree first, then check if the current node's value is greater than the value of the previous node (if it exists). If not, we return false.
// We update the prev node to the current node and recursively traverse the right subtree.
// We start the in-order traversal from the root node with the previous node initialized to null.
// Example usage demonstrates checking if a binary tree is a valid BST and logs the result to the console.
