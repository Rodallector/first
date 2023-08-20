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

  // Depth-First Search: Preorder traversal
  dfsPreorder() {
    const result = [];

    function traverse(node) {
      if (!node) {
        return;
      }

      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);

    return result;
  }

  // Depth-First Search: Inorder traversal
  dfsInorder() {
    const result = [];

    function traverse(node) {
      if (!node) {
        return;
      }

      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    }

    traverse(this.root);

    return result;
  }

  // Depth-First Search: Postorder traversal
  dfsPostorder() {
    const result = [];

    function traverse(node) {
      if (!node) {
        return;
      }

      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    }

    traverse(this.root);

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

console.log(tree.dfsPreorder()); // Output: [1, 2, 4, 5, 3, 6, 7]
console.log(tree.dfsInorder()); // Output: [4, 2, 5, 1, 6, 3, 7]
console.log(tree.dfsPostorder()); // Output: [4, 5, 2, 6, 7, 3, 1]

/*
n the code above, we have the same Node and BinaryTree classes as in the breadth-first search example. The insert method is also the same.

The dfsPreorder, dfsInorder, and dfsPostorder methods perform depth-first search with different traversal orders: preorder, inorder, and postorder, respectively.

In each of these DFS methods, we define a helper function called traverse that recursively visits the nodes in the specified order. The function checks if the current node is null and returns if it is. Otherwise, it performs the specified action (e.g., pushing the node's value to the result array) and recursively calls traverse on the left and right child nodes.

In the example usage, we create a binary tree and insert several nodes. Then, we call the dfsPreorder, dfsInorder, and dfsPostorder methods to perform depth-first search with different traversal orders and print the resulting arrays.

The outputs would be:

Preorder traversal: `[1, 2, 4, 5,
*/
