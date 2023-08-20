// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree class
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Inserting a node in level order
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];

    while (queue.length) {
      const currentNode = queue.shift();

      if (!currentNode.left) {
        currentNode.left = newNode;
        return;
      }

      if (!currentNode.right) {
        currentNode.right = newNode;
        return;
      }

      queue.push(currentNode.left);
      queue.push(currentNode.right);
    }
  }

  // Breadth-First Search
  bfs() {
    const result = [];
    const queue = [this.root];

    while (queue.length) {
      const currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }
}

// Usage
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

console.log(tree.bfs()); // Output: [1, 2, 3, 4, 5, 6, 7]

/*
In the code above, we have a Node class representing a single node in the binary tree, and a BinaryTree class that manages the tree structure. The insert method inserts nodes into the tree in level order.

The bfs method performs a breadth-first search on the tree. It uses a queue to traverse the tree level by level. Starting from the root node, it visits each node, adds its value to the result array, and enqueues its children (left and right) if they exist. The process continues until all nodes have been visited.

In the example usage, we create a binary tree and insert several nodes. Then, we call the bfs method to perform breadth-first search and print the resulting array.

The output would be [1, 2, 3, 4, 5, 6, 7], which represents the values of the nodes visited in breadth-first order.
*/
