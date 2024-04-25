// Level Medium
// Given the root of a binary search tree, and an integer k,
// return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
// Example:
// Input root = [3,1,4,null,2], k = 1
// Output 1

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function kthSmallest(root, k) {
  // Stack for iterative in-order traversal
  const stack = [];
  // Current node pointer
  let current = root;
  // Counter to keep track of visited nodes
  let count = 0;

  while (current || stack.length > 0) {
    // traverse to the left most node
    while (current) {
      stack.push(current);
      current = current.left;
    }

    // Process the current node
    current = stack.pop();
    count++;

    // Return the value when kth node is reached
    if (count === k) return current.val;

    // Move to the right subtree
    current = current.right;
  }
  // Return null if k is out of range
  return null;
}

const k = 1;
const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);
console.log(kthSmallest(root, k)); // Output: 1

const root1 = new TreeNode(5);
root1.left = new TreeNode(3);
root1.right = new TreeNode(6);
root1.left.left = new TreeNode(2);
root1.left.right = new TreeNode(4);
root1.left.left.left = new TreeNode(1);

console.log(kthSmallest(root1, 3)); // Output:  3

// Explanation:

// We define a TreeNode class to represent each node of the binary search tree (BST).
// The kthSmallest function takes the root of the BST and the integer k as input and returns the kth smallest value.
// We use a stack for iterative in-order traversal of the BST.
// We traverse to the leftmost node of the BST while pushing nodes onto the stack.
// When we reach a leaf node or a node with no left child, we process the current node by popping it from the stack,
// incrementing the counter, and checking if the current node is the kth smallest value.
// If the counter reaches k, we return the value of the current node.
// After processing the current node, we move to its right subtree.
// We repeat this process until we either find the kth smallest value or traverse all nodes in the BST. If k is out of range, we return null.
