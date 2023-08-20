class Node {
	constructor(info){
		this.info = info;
	}
}

class Stack {
	constructor(){
		this.stack = new Array();
	}

	push(data) {
		this.stack[this.stack.length] = new Node(data);
	}

	pull() {
		return this.stack.pop();
	}
}

var Stack1 = new Stack();
Stack1.push("item");
console.log(Stack1['stack'][0]);