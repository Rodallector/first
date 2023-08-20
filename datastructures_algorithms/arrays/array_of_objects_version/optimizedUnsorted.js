class Node {
	constructor(data) {
		this.nodeData = data;
	}
}

function insert(newNode) {
	unsortedArray[unsortedArray.length] = newNode;
}

function fetch(targetKey) {
	i = 0;
	while (targetKey !== optimizedArray[i].nodeData) {
		i++;
	}
	var target = new Node();
	target = optimizedArray[i];
	if (i !== 0) {
		var temp = optimizedArray[i - 1];
		optimizedArray[i - 1] = optimizedArray[i];
		optimizedArray[i] = temp;
	}
	return target;
}

function remove(targetKey) {
	i = 0;
	while (targetKey !== optimizedArray[i].nodeData) {
		i++
	}
	optimizedArray[i] = optimizedArray[optimizedArray.length - 1];
	optimizedArray.length--;
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

var optimizedArray = [node1, node2, node3, node4, node5, node6, node7, node8, node9];
