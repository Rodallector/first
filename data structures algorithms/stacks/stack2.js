class Node {
	constructor(name, address, number){
		this.name = name;
		this.address = address;
		this.number = number;
	}
	
	toString() {
		return (
			"Name: " + this.name + "\n" +
			"Address: " + this.address + "\n" +
			"Number: " + this.number + "\n"
		);
	}
	
	deepCopy() {
		return new Node(this.name, this.address, this.number);
	}
}

class Stack {
	
	stack;
	top = 0;
	
	constructor(size){
		this.stack = new Array(size);
	}
	
	
	push(data) {
		if (this.top < this.stack.length) {
			this.stack[this.top] = data.deepCopy();
			this.top++;
		}
		else {
			this.expand();
			this.push(data);
		}
	}
	
	pull() {
		let temp = this.stack[this.top].deepCopy();
		this.stack.length--;
		this.top--;
		return temp;
	}
	
	expand() {
		var newStack = new Stack(this.stack.length);
		for (var i = 0; i < this.stack.length; i++) {
			newStack.stack[i] = this.stack[i].deepCopy();
		}
		this.stack = newStack.stack;
		//because newStack is a local variable, it is deleted automatically on function end
		//OR this.stack.size + 1;
	}
	
}

var Stack1 = new Stack(2);
var Node1 = new Node("rod", "109 N Rocky River Dr", 4408796361);
var Node2 = new Node("jacob", "2811 Hearthstone Rd", 2166819332);
Stack1.push(Node1);
Stack1.push(Node2);