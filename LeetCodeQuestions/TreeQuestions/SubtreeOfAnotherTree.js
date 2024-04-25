// Level Easy
// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
// Examples:
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false
// Constraints:
// The number of nodes in the root tree is in the range [1, 2000].
// The number of nodes in the subRoot tree is in the range [1, 1000].
// -104 <= root.val <= 104
// -104 <= subRoot.val <= 104

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSubTree(root, subRoot) {
  // Base case: If root is null, return false
  if (!root) return false;

  // Check if the current subtree matches subRoot
  if (isSameTree(root, subRoot)) return true;

  // Recursively search in the left and right subtrees
  return isSubTree(root.left, subRoot) || isSubTree(root.right, subRoot);
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

const root1 = new TreeNode(3);
root1.left = new TreeNode(4);
root1.right = new TreeNode(5);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(2);

const subRoot1 = new TreeNode(4);
subRoot1.left = new TreeNode(1);
subRoot1.right = new TreeNode(2);

console.log(isSubTree(root1, subRoot1)); // Output: true

const root2 = new TreeNode(3);
root2.left = new TreeNode(4);
root2.right = new TreeNode(5);
root2.left.left = new TreeNode(1);
root2.left.right = new TreeNode(2);
root2.right.right = new TreeNode(0);

const subRoot2 = new TreeNode(4);
subRoot2.left = new TreeNode(1);
subRoot2.right = new TreeNode(2);

console.log(isSubTree(root2, subRoot2)); // Output: false

// Explanation:

// We define a TreeNode class to represent each node of the binary tree.
// The isSubtree function checks if there is a subtree of root with the same structure and node values as subRoot. It recursively searches in the left and right subtrees of root, checking if any subtree matches subRoot.
// The isSameTree function is a helper function that checks if two binary trees are the same in structure and node values, as we implemented before.
// Example usage demonstrates checking if a binary tree contains a subtree with the same structure and node values as another binary tree and logs the result to the console.
