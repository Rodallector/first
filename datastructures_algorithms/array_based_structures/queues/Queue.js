class Node {
	constructor(info){
		this.info = info;
	}
}

class Queue {
	constructor(){
		this.queue = new Array();
	}

	push(data) {
		this.queue.push(new Node(data));
	}

	pull() {
		//FIFO
		return this.queue.shift();
	}
}

debugger;
var Q1 = new Queue();
Q1.push("item_1");
console.log(Q1.pull());