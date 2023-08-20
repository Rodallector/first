//PROCEDURAL LINKED LIST

//data
var player1 = "p1";
var player2 = "p2";
var player3 = "p3";
var player4 = "p4";

class linkedList {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

//initialize list
const head = new linkedList(player1);
head.next = new linkedList(player2);
head.prev = new linkedList(player4);
//2nd node
head.next.next = new linkedList(player3);
head.next.prev = new linkedList(player1);
//3rd node
head.next.next.next = new linkedList(player4);
head.next.next.prev = new linkedList(player3);
//4th node
head.next.next.next.next = head;
head.next.next.next.prev = head.next.next.next;
//reversal
head.prev.prev = head.next.next;
head.prev.prev.prev = head.next;
head.prev.prev.prev.prev = head;

//traverse the list
var current = head;
do {
	console.log("prev data: " + current.prev.data);
	console.log("current data: " + current.data);
	console.log("next data: " + current.next.data);
	current = current.next;
	console.log("traverse to next");
}
while (current !== head) {
	//this block executes after the condition is met
	console.log("end of list");
}