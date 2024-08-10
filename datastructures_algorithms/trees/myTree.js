class Node {
	constructor(data, previous, left, right) {
		
		if (!data == 0) {	
			this.data = data;
		} else if (data === 0) {
			this.data = 0;
		} else {
			this.data = undefined;
		}
		
		this.previous = previous || null; //the parent of this Node
		
		this.left = left || null;
		this.right = right || null;
		
	}
}

class BinaryTree {
	
	count = 0;
	
	constructor() {
		this.root = null;
	}
	
	add(integer) {
		
		if (this.root !== null)
		{
			this.addNode(this.root, integer);
		}
		else
		{
			this.root = new Node(integer, this);
			this.root.previous = this.root;
			this.count++;
			
		}
	}
	
	addNode(node, integer) {
		//takes a node as a starting position and moves left or right accordingly
		//does not handle middle insertions
		
		if (integer < node.data) {
			
			if (node.left === null) {
				//reached end of list
				node.left = new Node(integer, node);
				this.count++;
				return;
			}
			else {
				this.addNode(node.left, integer);
				return;
			}
		}
		
		if (integer > node.data) {
			
			if (node.right === null) {
				//reached end of list
				node.right = new Node(integer, node);
				this.count++;
				return;
			}
			else {
				this.addNode(node.right, integer);
				return;
			}
		}
		
		if (integer === node.data) {
			return;
		}
		
	}
	
	search(target, node) {
		
		if (target)
		{	
			let result;
			
			if (node === undefined) {
				node = this.root;
			}
			
			if (target == node.data)
			{
				console.log("match found: " + node);
				return node;
			}
			else
			{
				if (target > node.data)
				{
					return result = this.search(target, node.right);
				}
				
				if (target < node.data)
				{
					return result = this.search(target, node.left);
				}
			}
		}
		else
		{
			if (!target) {
				console.log("improper search criteria");
			}
			
			if (!node) {
				console.log("not found, did you provide a starting node?");
			}
			
			return false;
		}
	}
	
	remove(target) {
		
		if (this.root !== null) {
			let node = this.search(target, this.root);
			if (node) {
				this.removeNode(node);
				this.count--;
			}
			else {
				console.log("target doesn't exist");
			}
		}
		else {
			console.log("root is null, zero nodes exist");
		}
	}
	
	removeNode(targetNode) {
		
		debugger;
		
		let parentNode = targetNode.previous;
		let replacement;
		let topBranch;
		let bottomBranch;
		
		if (parentNode.right.data == targetNode.data) //targetNode is the right child of its parent
		{
			//test for targetNode children, handle removal, and restructure accordingly
			if (targetNode.left === null && targetNode.right === null)
			{
				//targetNode has no children
				parentNode.right = null;
			}	
			else if (targetNode.left && targetNode.right)
			{
				//targetNode has 2 children
				
				//set the variables
				replacement = targetNode.left;
				topBranch = this.traverseRight(replacement);
				bottomBranch = targetNode.right;
				
				//make the connections
				parentNode.right = replacement;
				replacement.previous = parentNode;
				topBranch.right = bottomBranch;
				bottomBranch.previous = topBranch;
			}
			else if (targetNode.left !== null && targetNode.right === null)
			{
				//targetNode only has a left child
				parentNode.right = targetNode.left;
				targetNode.left.previous = parentNode;
			}
			else if (targetNode.left === null && targetNode.right !== null)
			{
				//targetNode only has a right child
				parentNode.right = targetNode.right;
				targetNode.right.previous = parentNode;
			}
			else
			{
				return;
			}
			
		}
		else
		{
			if (parentNode.left.data == targetNode.data) //targetNode is the left child of its parent
			{
				//test for targetNode children, handle removal, and restructure accordingly
				if (targetNode.left === null && targetNode.right === null)
				{
					//targetNode has no children
					parentNode.left = null;
				}	
				else if (targetNode.left && targetNode.right)
				{
					//targetNode has 2 children
					
					//set the variables
					replacement = targetNode.right;
					topBranch = this.traverseLeft(replacement);
					bottomBranch = targetNode.left;
					
					//make the connections
					parentNode.left = replacement;
					replacement.previous = parentNode;
					topBranch.left = bottomBranch;
					bottomBranch.previous = topBranch;
					
				}
				else if (targetNode.left !== null && targetNode.right === null)
				{
					//targetNode only has a left child
					parentNode.left = targetNode.left;
					targetNode.left.previous = parentNode;
				}
				else if (targetNode.left === null && targetNode.right !== null)
				{
					//targetNode only has a right child
					parentNode.left = targetNode.right;
					targetNode.left.previous = parentNode;
				}
				else
				{
					return;
				}
			}
		}
		
	}
	
	traverseLeft(start) {
		while (start.left) {
			start = start.left;
		}
		return start;
	}
	
	traverseRight(start) {
		while (start.right) {
			start = start.right;
		}
		return start;
	}
	
}

//EXECUTION
var tree = new BinaryTree();
tree.add(8);
tree.add(4);
tree.add(2);
tree.add(1);
tree.add(3);
tree.add(6);
tree.add(5);
tree.add(7);
tree.add(12);
tree.add(10);
tree.add(9);
tree.add(11);
tree.add(14);
tree.add(13);
tree.add(15);

//consider a constructor or a function that takes a list and creates a tree from the list

//consider that there are left and right movements for add and remove, perhaps can pass function for movement as a parameter to the other function

//or can use traversal function that simply compares data and returns the parent or the node of which needs to be modified, this could work for add, remove, and search
