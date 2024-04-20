// DFS - Depth First Search
// InOrder , PreOrder and PostOrder traversal of a Binary Tree using DFS.
// InOrder - 33, 101, 105
// PreOrder - 101, 33, 105
// PostOrder - 33,  105, 101

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

class Node1 {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node1(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else {
          return true; //element found
        }
      }
    }
    return false; //element not found
  }
  lookup1(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
  remove(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // There's a match
        // option 1 No right child
        if (currentNode.right == null) {
          if (parentNode == null) {
            this.root = currentNode.left;
          } else {
            // if parent > current value, make current left child a child parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
              // if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
          // option 2 Right child which doesn't have a left child.
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            // if parent > current, make right child a right child of the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
              // if parent < current, make right child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
          // option 3: Right child that has a left child
        } else {
          // find the right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          // Parent's left subtree is now left most's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
  DFSInOrder() {
    // DFS is usually used with recursion
    return traverseInOrder(this.root, []);
  }
  DFSPostOrder() {
    // Post order traversal returns nodes in reverse order of their original appearance
    return traversePostOrder(this.root, []);
  }
  DFSPreOrder() {
    //  Pre-order traversal visits the node first then its left and right subtrees
    return traversePreOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  if (node.left) traverseInOrder(node.left, list);
  list.push(node.value);
  if (node.right) traverseInOrder(node.right, list);
  return list;
}
function traversePostOrder(node, list) {
  if (node.left) traversePostOrder(node.left, list);
  if (node.right) traversePostOrder(node.right, list);
  list.push(node.value);
  return list;
}
function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) traversePreOrder(node.left, list);
  if (node.right) traversePreOrder(node.right, list);
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// Output needs to look like
//        9
//      /   \
//     4      20
//    / \    /  \
//   1   6   15  170

console.log('In Order:', tree.DFSInOrder()); // InOrder - [1,4,6,9,15,20,170]
console.log('Pre Order:', tree.DFSPreOrder()); // PreOrder - [9,4,1,6,20,15,170]
console.log('Post Order:', tree.DFSPostOrder()); // PostOrder - [1,6,4,15,170,20,9]
