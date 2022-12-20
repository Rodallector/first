'use strict';

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
	
	constructor(){
		this.stack = new Array();
	}
	
	
	push(data) {
		this.stack[this.stack.length] = data.deepCopy();
	}
	
	pull() {
		let temp = this.stack[this.stack.length-1].deepCopy();
		this.stack.length--;
		return temp;
	}
	
}

var Stack1 = new Stack();
var Node1 = new Node("rod", "109 N Rocky River Dr", 4408796361);
var Node2 = new Node("jacob", "2811 Hearthstone Rd", 2166819332);
Stack1.push(Node1);
Stack1.push(Node2);