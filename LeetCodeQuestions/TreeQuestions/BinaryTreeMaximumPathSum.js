// Level Hard
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.
// A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
// The path sum of a path is the sum of the node's values in the path.
// Given the root of a binary tree, return the maximum path sum of any non-empty path.
// Example:
// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxPathSum(root) {
  // Initialize the maximum path sum as negative infinity
  let maxSum = -Infinity;

  // Helper function to recursively calculate the maximum path sum starting from a node
  function maxSumStartingFromNode(node) {
    // Base case: If node is null, return 0
    if (!node) return 0;

    // Recursively calculate the maximum path sum starting from the left and right children of the node.
    // Ignore negative sums
    const leftSum = Math.max(maxSumStartingFromNode(node.left), 0);
    const rightSum = Math.max(maxSumStartingFromNode(node.right), 0);

    // Calculate the maximum path sum that includes the current node as the highest node in the path
    const currentSum = node.val + leftSum + rightSum;

    // Update the global maximum path sum
    maxSum = Math.max(maxSum, currentSum);

    // Return the maximum path sum starting from the current node
    return node.val + Math.max(leftSum, rightSum);
  }
  // Start the recursion from the root node
  maxSumStartingFromNode(root);

  return maxSum;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(maxPathSum(root)); //  Outputs: 6

const root1 = new TreeNode(-10);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);
console.log(maxPathSum(root1)); //   Outputs: 42

// Explanation:
// We define a TreeNode class to represent each node of the binary tree.
// The maxPathSum function calculates the maximum path sum of any non-empty path in the binary tree.
// We initialize the maxSum variable with negative infinity to keep track of the maximum path sum.
// We define a helper function maxSumStartingFromNode to recursively calculate the maximum path sum starting from a given node.
// In the helper function, we handle the base case where the node is null,
// and recursively calculate the maximum path sum starting from the left and right children of the node.
// We calculate the maximum path sum that includes the current node as the highest node in the path and
// update the global maxSum variable accordingly.
// Finally, we start the recursion from the root node and return the calculated maximum path sum.
