// Level: Medium
// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class GraphNode {
  constructor(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors || [];
  }
}

const cloneGraph = (node) => {
  if (!node) return null;

  // Map to store mapping between original nodes and their copies
  const visited = new Map();

  const dfs = (originalNode) => {
    // If the original node has already been visited, return its corresponding copy.
    if (visited.has(originalNode)) return visited.get(originalNode);

    // Create a copy of the original node
    const copyNode = new GraphNode(originalNode.val);

    // Add the original node to the visited map with its corresponding copy
    visited.set(originalNode, copyNode);

    // Iterate through the neighbors of the original node
    for (const neighbor of originalNode.neighbors) {
      // Recursively clone each neighbor and add it to the neighbors list of the copy node
      copyNode.neighbors.push(dfs(neighbor));
    }

    return copyNode;
  };
  // Start DFS from the given node
  return dfs(node);
};

const node1 = new GraphNode(1);
const node2 = new GraphNode(2);
const node3 = new GraphNode(3);

node1.neighbors.push(node2, node3);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node1, node2);

const clonedGraph = cloneGraph(node1);

console.log(clonedGraph.val); // output:   1
console.log(clonedGraph.neighbors.map((neighbor) => neighbor.val)); // Output : [2, 3]

// We can use depth-first search (DFS) to traverse the original graph and create a deep copy of each node and its neighbors.
// We'll maintain a mapping between original nodes and their corresponding copies to ensure that we don't duplicate nodes.

//This code defines a Node class to represent nodes in the graph.
//The cloneGraph function takes a reference to a node in a connected undirected graph and returns a deep copy of the graph using depth-first search (DFS).
//We maintain a map called visited to keep track of visited nodes and their corresponding copies.
//The dfs function recursively clones each node and its neighbors while ensuring that we don't create duplicate copies of nodes.
//Finally, we call cloneGraph with the reference node to start the cloning process.
