// Level Hard
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
// Examples:
// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]
// Input: root = []
// Output: []
// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// -1000 <= Node.val <= 1000

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(root) {
  // Base case: If root is null, return empty string
  if (!root) return '';

  // Serialize the current node value and its left and right subtrees recursively
  const leftSerialized = serialize(root.left);
  const rightSerialized = serialize(root.right);

  // Construct the serialized string by appending the current node value and its children
  return `${root.val},${leftSerialized},${rightSerialized}`;
}

function deserialize(data) {
  // Split the serialized string by the delimiter
  const values = data.split(',');

  // Helper function to deserialize the tree recursively
  const deserializeHelper = () => {
    // Get the next value from the serialized data
    const val = values.shift();

    // Return null if the value indicates absence of a node
    if (val === '') return null;

    // Create a new node with the current value and recursively construct its left and right subtrees
    const node = new TreeNode(parseInt(val));
    node.left = deserializeHelper();
    node.right = deserializeHelper();

    return node;
  };
  return deserializeHelper();
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

const serialized = serialize(root);
console.log(serialized);
const deserialized = deserialize(serialized);
console.log(deserialized);

// Explanation:

// We define a TreeNode class to represent each node of the binary tree.
// The serialize function serializes the binary tree into a string by performing a pre-order traversal of the tree. Each node's value is appended to the serialized string, separated by a delimiter (,). For null nodes, an empty string is used as a marker.
// The deserialize function reconstructs the binary tree from the serialized string. It splits the string by the delimiter and constructs the tree recursively based on the pre-order sequence.
// Example usage demonstrates serializing and deserializing a binary tree and logs the serialized string and the deserialized tree to the console.
