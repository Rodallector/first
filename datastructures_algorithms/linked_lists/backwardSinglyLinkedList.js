class Node {
	constructor(newLink, newData) {
		this.prev = newLink || null;
		this.data = newData || undefined;
	}
}

class linkedList {

	constructor(size) {
		this.head = new Node();
		this.count = 0;
		this.max = size || 10;
	}

	insert(newData) {
		if (count < max) {
			//this.head as a parameter refers to the 'old' head
			this.head = new Node(this.head, newData);
			this.count++;
			return true;
		}
		else {
			console.log('failed, max records exist');
			return false
		}
	}

	fetch(target) {
		let pointer = this.head;
		if (pointer.prev == undefined) { 
			console.log("list is empty");
			return null;
		}
		else {
			while (pointer !== undefined) {
				if (pointer.data == target) {
					return pointer;
				}
				pointer = pointer.prev;
			}
			return null;
		}
	}

	remove(target) {
		if (this.head.prev == undefined) {
			console.log("list is already empty");
			return null;
		}
		else {
			let cycler = this.head;
			let pointer = cycler.prev;
			while (pointer !== undefined) {
				if (pointer.data !== target) {
					cycler = pointer;
					pointer = pointer.prev;
				}
				else {
					cycler.prev = pointer.prev;
					this.count--;
					return true;
				}
			}
			return false;
		}
	}

	update(target, value) {
		let pointer = this.fetch(target);
		if (pointer) {
			pointer.data = value;
			return true;
		}
		else {
			console.log("target value doesn't exist");
			return null;
		}
	}

	output() {
		let temp = this.head;
		while(temp.data) {
			console.log(temp.data);
			temp = temp.prev;
		}
		return true;
	}

}

//execution
var List = new linkedList();
