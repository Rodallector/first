/*
	This is my first attempt at writing a Queue structure
	I intentionally refrained from using JavaScript's built in push() and shift()
*/

class Node {
	constructor(info){
		this.info = info;
	}
}

class Queue {
	constructor(){
		this.queue = new Array();
		this.n = 0; //number of pulls
	}

	push(data) {
		this.queue[this.queue.length] = new Node(data);
	}

	pull() {
		let temp = this.queue[this.n];
		this.queue[this.n] = null;
		this.housekeeping();
		return temp;
	}

	housekeeping() {
		if (++this.n >= this.queue.length)
		{
			this.queue = new Array();
			this.n = 0;
		}
	}
}

var Q1 = new Queue();
Q1.push("item_1");
console.log(Q1.pull());