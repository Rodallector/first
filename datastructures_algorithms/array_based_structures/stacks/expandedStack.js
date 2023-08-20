'use strict';

class Node {
	constructor(info){
		this.info = info || undefined;
	}

	toString() {
		return (
			"Data: " + this.info + "\n"
		);
	}

	deepCopy() {
		return new Node(this.info);
	}
}

class expandedStack {

	stack; //LIFO
	size;
	index;

	constructor(integer){
		this.stack = new Array(integer);
		this.size = integer;
		this.index = 0;
	}


	push(data) {
		this.index++;
		if (this.index <= this.size && this.stack.length == this.size) {
			this.stack[this.index] = data.deepCopy();
		}
		else {
			this.expand();
			this.push(data);
		}
	}

	pull() {
		if (this.index !== 0) {
			let temp = this.stack[this.index].deepCopy();
			this.stack[this.stack.index--];
			return temp;
		}
	}

	expand() {
		var newStack = new expandedStack(this.stack.length);
		for (var i = 0; i < this.stack.length; i++) {
			newStack.stack[i] = this.stack[i].deepCopy();
		}
		this.stack = newStack.stack; //this.stack.size++;
		//local variable newStack is deleted automatically on function end
	}

}

debugger;
var Stack1 = new expandedStack(2);
Stack1.push(new Node("Rod", "Rocky River", 4408796361));
Stack1.push(new Node("Jacob", "Hearthstone", 2166819332));
console.log(Stack1['stack'][0]);
console.log(Stack1['stack'][1]);