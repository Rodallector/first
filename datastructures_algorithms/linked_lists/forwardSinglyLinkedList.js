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
		while (i.next) {
			i = i.next;
		}
		i.next = new Node(data);
		this.count++;
		return true;
	}

	fetch(target) {
		let i = this.head;
		while (i.data !== target & i.next !== null) {
			i = i.next;
		}
		if (i.data === target) {
			return i;
		}
		console.log("target not found");
		return false;
	}

	remove(target) {
		let i = this.head;
		
		//special case: target is the head node
		if (i.data === target) {
			if (i.next === null) {
				this.emptyList();
				return true;
			}
			this.head = this.head.next;
			this.count--;
			return true;
		}
		
		while (i.next !== null & i.next.data !== target) {
			i = i.next;
		}
		
		//target found
		if (i.next.data === target) {
			if (i.next.next !== null) {
				let i = i.next.next;
				count--;
				return true;
			}
			let i.next = null;
			count--;
			return true;
		}
		console.log("target not found");
		return false;
	}

	update(target, value) {
		//let i = this.fetch(target);
		if (let i = this.fetch(target))
		{
			i.data = value;
			return true;
		}
		console.log("target value doesn't exist");
		return false;
	}
	
	outputList() {
		for (let i = this.head; i; i = i.next) {
			console.log(i.data);
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

/*
	this linked list constructs the list in order, and maintains chronology
	CRUD ops dont work on multiple objects per single operation
	targets are only found via data values, not objects
	else statements have been omitted, and rely on return statements

	next version enhancements:
	-add ability to work with data values of 0
	-add ability to perform crud on multiple nodes with same data value, rather than one at a time
*/

//execution
var List = new linkedList();
List.insert(1);
List.insert(2);
List.insert(3);
