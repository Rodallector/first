class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {

	constructor() {
		this.root = null;
	}

	add(data) {
		const newNode = new Node(data);

		if (!this.root)
		{
			this.root = newNode;
		}
		else
		{
			let current = this.root;

			while (true)
			{
				if (data < current.data)
				{
					if (!current.left)
					{
						current.left = newNode;
						break;
					}
					else
					{
						current = current.left;
					}
				}
				else
				{
					if (!current.right)
					{
						current.right = newNode;
						break;
					}
					else
					{
						current = current.right;
					}
				}
			}
		}
	}

	remove(data) {
		let current = this.root;
		let parent = null;
		let isLeft = false;

		while (current)
		{
			if (current.data === data)
			{
				break;
			}
			else if (data < current.data)
			{
				parent = current;
				current = current.left;
				isLeft = true;
			}
			else
			{
				parent = current;
				current = current.right;
				isLeft = false;
			}
		}

		if (!current)
		{
			return;
		}

		if (!current.left && !current.right)
		{
			if (!parent)
			{
			this.root = null;
			} else if (isLeft) {
			parent.left = null;
			} else {
			parent.right = null;
			}
		}
		else if (!current.left)
		{
			if (!parent) {
			this.root = current.right;
			} else if (isLeft) {
			parent.left = current.right;
			} else {
			parent.right = current.right;
			}
		}
		else if (!current.right)
		{
			if (!parent) {
			this.root = current.left;
			} else if (isLeft) {
			parent.left = current.left;
			} else {
			parent.right = current.left;
			}
		}
		else
		{
			let minNode = current.right;
			let minNodeParent = current;
			while (minNode.left) {
			minNodeParent = minNode;
			minNode = minNode.left;
			}

			current.data = minNode.data;
			if (minNodeParent === current) {
			current.right = minNode.right;
			} else {
			minNodeParent.left = minNode.right;
			}
		}
	}

}
