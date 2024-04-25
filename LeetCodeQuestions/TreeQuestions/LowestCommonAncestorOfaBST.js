// Level Medium
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
// Example:
// Input root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function lowestCommonAncestor(root, p, q) {
  // Base case: If root is null, return null
  if (!root) return null;

  const rootVal = root.val;
  const pVal = p.val;
  const qVal = q.val;

  // If both p and q are less than the root value, LCA is in the left subtree
  if (pVal < rootVal && qVal < rootVal) {
    return lowestCommonAncestor(root.left, p, q);

    // If both p and q are greater than the root value, LCA is in the right subtree
  } else if (pVal > rootVal && qVal > rootVal) {
    return lowestCommonAncestor(root.right, p, q);

    // If p and q are on different sides of the root, or one of them is the root itself, the root is the LCA
  } else {
    return root;
  }
}

const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

const p = new TreeNode(2);
const q = new TreeNode(8);

console.log(lowestCommonAncestor(root, p, q));

// Explanation:

// We define a TreeNode class to represent each node of the binary search tree.
// The lowestCommonAncestor function takes the root of the binary search tree, and two nodes p and q as input,
// and returns their lowest common ancestor.
// We compare the values of p and q with the value of the current node (root) to determine which subtree to explore.
// If both p and q are less than the root value, we recursively search in the left subtree.
// If both p and q are greater than the root value, we recursively search in the right subtree.
// If p and q are on different sides of the root, or one of them is the root itself, the root is the lowest common ancestor, so we return it.
