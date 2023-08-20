class Node {
	constructor(info){
		this.info = info;
	}
}

class Stack {
	constructor(){
		//this.this = new Array(); peculiar results
		this.stack = new Array();
	}

	push(data) {
		this.stack[this.stack.length] = new Node(data);
	}

	pull() {
		let temp = this.stack[this.stack.length-1];
		--this.stack.length;
		return temp;
	}
}

var Stack1 = new Stack();
Stack1.push("item");
console.log(Stack1['stack'][0]);