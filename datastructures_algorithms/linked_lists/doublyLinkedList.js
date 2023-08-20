class Node {
	constructor(Prev, Data, Next) {
		this.prev = Prev || null;
		this.data = Data || undefined;
		this.next = Next || null;
	}
}

class linkedList {

	constructor() {
		//this.head = this.tail = new Node(); //circular linked list
		this.head = new Node(null, "head");
		this.tail = new Node(null, "tail");
		this.head.next = this.tail;
		this.tail.prev = this.head;
		this.count = 0;
		this.max = 3;
	}

	append(newData) {
		//add data to end of list
		if (this.count < this.max) {
			let newNode = new Node(this.tail.prev, newData, this.tail);
			this.tail.prev.next = newNode; 
			this.tail.prev = newNode;
			this.count++;
			return true;
		}
		else {
			console.log('failed, max records exist');
			return false
		}
	}

	prepend(newData) {
		//add data to beginning of list
		if (this.count < this.max) {
			let newNode = new Node(this.head, newData, this.head.next);
			this.head.next.prev = newNode;
			this.head.next = newNode;
			this.count++;
			return true;
		}
		else {
			console.log('failed, max records exist');
			return false
		}
	}

	fetch(target, symbol) {
		let start = this.orientation(symbol);
		if (start === this.head) {
			//forward search
			let pointer = this.head;
			while (pointer !== this.tail) {
				if (pointer.data == target) {
					return pointer;
				}
				pointer = pointer.next;
			}
			console.log("target not found");
			return false;
		}
		else if (start === this.tail) {
			//backward search
			let pointer = this.tail;
			while (pointer !== this.head) {
				if (pointer.data == target) {
					return pointer;
				}
				pointer = pointer.prev;
			}
			console.log("target not found");
			return false;
		}
	}

	remove(target, direction) {
		let temp = this.fetch(target, direction);
		if (temp) {
			temp.next.prev = temp.prev;
			temp.prev.next = temp.next;
			temp = null;
			return true;
		}
		else {
			console.log("target not found");
			return false;
		}
	}

	update(target, value, direction) {
		let pointer = this.fetch(target, direction);
		if (pointer) {
			pointer.data = value;
			return true;
		}
		else {
			return false;
		}
	}

	output(direction) {
		let pointer = this.orientation(direction);
		let counter = -2;
		if (pointer === this.head) {
			while(pointer.data) {
				console.log(pointer.data);
				counter++;
				if (pointer === this.tail) {
					pointer = 0;
				}
				else {
					pointer = pointer.next;
				}
			}
		}
		else {
			while(pointer.data) {
				console.log(pointer.data);
				counter++;
				if (pointer === this.head) {
					pointer = 0;
				}
				else {
					pointer = pointer.prev;
				}
			}
		}
		return "Number of Records: " + counter;
	}

}

linkedList.prototype.orientation = function(character) {
	character = character || '+';
	var pattern = /^\+$/;
	if (pattern.test(character)) {
		return this.head;
	}
	else {
		return this.tail;
	}
}

//execution
var List = new linkedList();