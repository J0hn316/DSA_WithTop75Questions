// Level Easy
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
// Examples:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Input: p = [1,2], q = [1,null,2]
// Output: false
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSameTree(p, q) {
  // Base case: If both trees are null, they are considered the same
  if (!p && !q) return true;

  // If one tree is null and the other is not, they are not the same
  if (!p || !q) return false;

  // If the values of the current nodes are different, they are not the same
  if (p.val !== q.val) return false;

  // Recursively check if the left and right subtrees are the same
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const p1 = new TreeNode(1);
p1.left = new TreeNode(2);
p1.right = new TreeNode(3);

const q1 = new TreeNode(1);
q1.left = new TreeNode(2);
q1.right = new TreeNode(3);

console.log(isSameTree(p1, q1)); // Output: true

const p2 = new TreeNode(1);
p2.left = new TreeNode(2);

const q2 = new TreeNode(1);
q2.right = new TreeNode(2);

console.log(isSameTree(p2, q2)); // Output: false

const p3 = new TreeNode(1);
p3.left = new TreeNode(2);
p3.right = new TreeNode(1);

const q3 = new TreeNode(1);
q3.left = new TreeNode(1);
q3.right = new TreeNode(2);

console.log(isSameTree(p3, q3)); // Output: false

// Explanation:

// We define a TreeNode class to represent each node of the binary tree.
// The isSameTree function takes the roots of two binary trees (p and q) as input and returns true
// if they are structurally identical and have the same node values, and false otherwise.
// We handle the base case where both trees are null, in which case they are considered the same.
// If one tree is null and the other is not, or if the values of the current nodes are different, we return false.
// We recursively check if the left and right subtrees of both trees are the same.
// Example usage demonstrates checking if two binary trees are the same and logs the result to the console.
