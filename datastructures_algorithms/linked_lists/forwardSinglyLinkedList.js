class Node {
	constructor(newData, newLink) {
		this.data = newData || undefined; //does not handle 0
		this.next = newLink || null;
	}
}

class linkedList {

	constructor() {
		this.head = new Node();
		this.count = 1;
	}

	insert(data) {
		let i = this.head;
		if (this.head.data === undefined)
		{
			//head has not been initialized with data
			this.head.data = data;
			return true;
		}
		else
		{
			while (i.next !== null)
			{
				i = i.next;
			}
			i.next = new Node(data);
			this.count++;
			return true;
		}
	}

	fetch(target, bool) {
		//the function remove uses the boolean in order to receive the preceeding node if applicable
		let pointer = this.head;
		let previous = bool || false;
		
		if (this.head.data === target)
		{
			return this.head;
		}
		
		while (pointer.next !== null)
		{
			if (pointer.next.data === target)
			{				
				if (previous)
				{
					return pointer;
				}
				else
				{
					//fetch is not being used in conjunction with the remove function
					return pointer.next;
				}
			}
			pointer = pointer.next;
		}
		console.log("target not found");
		return false;
	}

	remove(target) {
		let targetNode = this.fetch(target, true); //receives the node before the target or head
		if (targetNode)
		{			
			if (targetNode === this.head)
			{	
				if (this.count === 1)
				{
					//head is the only node that exists
					this.head = new Node();
					return true;
				}
				
				if (this.head.next.data === target)
				{
					if (this.count > 2)
					{
						//there is a node after the target
						this.head.next = this.head.next.next;
						this.count--;
						return true;
					}
					else
					{
						//there is not a node after the target
						this.head.next = null;
						this.count--;
						return true;
					}
				}
			}
			else
			{
				if (targetNode.next.next)
				{
					targetNode.next = targetNode.next.next;
					this.count--;
					return true;
				}
				else
				{
					//the target node is the last in the list
					targetNode.next = null;
					this.count--;
					return true;
				}
			}
		}
		else
		{
			console.log("deleting failed");
			return false;
		}
	}

	update(target, value) {
		let i = this.fetch(target);
		if (i)
		{
			i.data = value;
			return true;
		}
		else
		{
			console.log("target value doesn't exist");
			return false;
		}
	}

	outputList() {
		let i = this.head;
		while(i)
		{
			console.log(i.data);
			i = i.next;
		}
		return true;
	}
	
	outputCount() {
		console.log("The list contains " + this.count + " nodes.");
		return true;
	}
	
	emptyList() {
		this.head = new Node();
		this.count = 1;
	}

}

//execution
var List = new linkedList();
List.insert(1);
List.insert(2);
List.insert(3);
List.insert(4);