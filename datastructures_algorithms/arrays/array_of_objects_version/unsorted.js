class Node {
	constructor(data) {
		this.nodeData = data;
	}

	//inherit and override toString
	this.prototype.toString = function toString() {
		return this.nodeData;
		//return '${this.nodeData}';
	}

	function deepCopy() {
		return new Node(this.nodeData);
	}
}

function insert(newNode) {
	unsortedArray[unsortedArray.length] = newNode;
}

function remove(targetKey) {
	i = 0;
	while (targetKey !== unsortedArray[i].nodeData) {
		i++;
	}
	for (j = i; j < unsortedArray.length - 1; j++) {
		unsortedArray[j] = unsortedArray[j + 1];
	}
	unsortedArray.length--;
}

function fetch(targetKey) {
	i = 0;
	while (targetKey !== unsortedArray[i].nodeData) {
		i++;
	}
	return unsortedArray[i];
}

function update(targetKey, newNode) {
	i = 0;
	while (targetKey !== unsortedArray[i].nodeData) {
		i++;
	}
	unsortedArray[i] = newNode;
}

node1 = new Node("Rod");
node2 = new Node("Steve");
node3 = new Node("Alex");
node4 = new Node("Angela");
node5 = new Node("Cheyenne");
node6 = new Node("Melodie");
node7 = new Node("Phillup");
node8 = new Node("Jacob");
node9 = new Node("Bill");

var unsortedArray = [node3, node1, node5, node7, node8, node2, node9, node6, node4];
