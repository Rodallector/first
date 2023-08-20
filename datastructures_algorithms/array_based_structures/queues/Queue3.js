/*
	This is my 2nd version of a Queue structure
	Interestingly it makes use of negative array index values
*/

class Node {
	constructor(info){
		this.info = info;
	}
}

class Queue {
	constructor(){
		this.queue = new Array();
		this.n = 0;
	}

	push(data) {
		this.queue[this.n--] = new Node(data);
	}

	pull() {
		let temp = this.queue[this.n+1];
		this.queue[this.n+1] = undefined;
		this.n++;
		return temp;
	}
}

var Q1 = new Queue();
Q1.push("item_1");
Q1.pull();