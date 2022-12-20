//OBJECT ORIENTED LINKED LIST

//DATA
var player1 = "p1";
var player2 = "p2";
var player3 = "p3";
var player4 = "p4";

//STRUCTURE
class linkedList {
	constructor(data, next, prev) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

//INITIALIZE
var node2 = new linkedList(player2, null, null);
var node3 = new linkedList(player3, null, null);
var tail = new linkedList(player4, null, null);
const head = new linkedList(player1, node2, tail);

//PROGRAMMING
head.next = node2;
head.prev = tail;
node2.next = node3;
node2.prev = head;
node3.next = tail;
node3.prev = node2;
tail.next = head;
tail.prev = node3;

//APPLICATION
var current = head;
do {
	console.log("prev data: " + current.prev.data);
	console.log("current data: " + current.data);
	console.log("next data: " + current.next.data);
	current = current.next;
	console.log("traverse to next");
	console.log("");
}
while (current !== head) {
	//this block executes after the condition is met
	console.log("end of list");
}

//NOTES
/*
legal ? const tail2 = new linkedList(tail)

howto handle non constant linked list items,
due to order of programming,
can not declare const on all objects,
two part program, preload variables first,
then second script redeclare as constants
or, is there a way to preload data via native javascript ability?
*/
