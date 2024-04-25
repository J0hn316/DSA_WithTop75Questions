// Level Medium
// Given two integer arrays preOrder and inOrder where preOrder is the preOrder traversal of a
// binary tree and inOrder is the inOrder traversal of the same tree, construct and return the binary tree.
// Example:
// Input: preOrder = [3,9,20,15,7], inOrder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTree(preOrder, inOrder) {
  // Create a map to store the indices of elements in the inOrder traversal for quick lookup
  const indexMap = {};
  for (let i = 0; i < inOrder.length; i++) {
    indexMap[inOrder[i]] = i;
  }

  // Recursive helper function to construct the binary tree
  function build(preStart, preEnd, inStart, inEnd) {
    // Base case: empty subtree
    if (preStart > preEnd || inStart > inEnd) return null;

    // Root value is the first element of preOrder
    const rootVal = preOrder[preStart];
    const root = new TreeNode(rootVal);

    // Find the index of root value in the inOrder traversal
    const rootIndex = indexMap[rootVal];

    // Calculate the number of nodes in the left subtree
    const leftSubtreeSize = rootIndex - inStart;

    // Recursively construct the left and right subtrees
    root.left = build(
      preStart + 1,
      preStart + leftSubtreeSize,
      inStart,
      rootIndex - 1
    );
    root.right = build(
      preStart + leftSubtreeSize + 1,
      preEnd,
      rootIndex + 1,
      inEnd
    );
    return root;
  }
  // Call the recursive function with appropriate indices
  return build(0, preOrder.length - 1, 0, inOrder.length - 1);
}

const preOrder = [3, 9, 20, 15, 7];
const inOrder = [9, 3, 15, 20, 7];
console.log(buildTree(preOrder, inOrder));

// Explanation:
// We define a TreeNode class to represent each node of the binary tree.
// The buildTree function takes the preOrder and inOrder traversals as input and returns the root of the constructed binary tree.
// We create a map indexMap to store the indices of elements in the inOrder traversal for quick lookup.
// We define a recursive helper function build to construct the binary tree.
// In the helper function, we handle the base case where the subtree is empty (preStart > preEnd or inStart > inEnd).
// We extract the root value from the preOrder traversal and create a new TreeNode with that value.
// We find the index of the root value in the inOrder traversal.
// We calculate the number of nodes in the left subtree and recursively construct the left and right subtrees.
// Finally, we call the recursive function with appropriate indices to construct the entire binary tree and return the root node.
