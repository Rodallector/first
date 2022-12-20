class Node {
	constructor(data) {
		this.nodeData = data;
	}
	
	deepCopy() {
		return new Node(this.nodeID, this.nodeData);
	}
	
	inputMethod() {
		this.nodeID = prompt("Enter a numerical nodeID: ", + "id");
		this.nodeData = prompt("Enter the name of the node's id: ", "name");
	}
}

function fetch(targetKey) {
	
	var low = 0;
	var high = sortedArray.length - 1;
	
	i = Math.ceil(high/2);
	
	while(targetKey !== sortedArray[i].nodeID) {	
		if (targetKey < sortedArray[i].nodeID && high !== low) {
			high = i - 1;
		}
		else {
			low = i + 1;
		}
		i = Math.floor((low + high)/2);
	}
	
	return sortedArray[i];
	
}

function remove(targetKey) {
	
	var low = 0;
	var high = sortedArray.length - 1;
	
	i = Math.ceil(high/2);
	
	while(targetKey !== sortedArray[i].nodeData) {
		if (targetKey < sortedArray[i].nodeData && high !== low) {
			high = i - 1;
		}
		else {
			low = i + 1;
		}
		i = Math.floor((low + high)/2);
	}
	
	for (j = i; j < sortedArray.length - 1; j++) {
		sortedArray[j] = sortedArray[j + 1];
	}
	
	sortedArray.length--;
	
}

function insert(newNode) {
	
	var low = 0;
	var high = sortedArray.length - 1;
	i = Math.ceil((low + high) / 2);
	
	while (!(newNode.nodeData < sortedArray[i].nodeData && newNode.nodeData > sortedArray[i - 1].nodeData)) {
		if (newNode.nodeData < sortedArray[i].nodeData) {
			high = i - 1;
		}
		else {
			low = i + 1;
		}
		i = Math.floor((low + high)/2); 
	}
	
	sortedArray.length++;
	
	//shift all elements up one
	for (j = sortedArray.length; j >= i; j--) {
		sortedArray[j] = sortedArray[j - 1];
	}
	
	sortedArray[i] = newNode;
	
}


node0 = new Node("a");
node1 = new Node("b");
node2 = new Node("c");
node3 = new Node("d");
node4 = new Node("e");
node5 = new Node("f");
node6 = new Node("g");
node7 = new Node("h");
node8 = new Node("i");

var sortedArray = [node0, node1, node2, node3, node4, node5, node6, node7, node8];