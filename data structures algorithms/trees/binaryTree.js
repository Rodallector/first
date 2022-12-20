class Node {
	
	value;
	leftChild;
	rightChild;
	parentNode;
	
	constructor(sortedArray, caller) {
		var size = sortedArray.length;
		switch(parseInt(size))
		{			
			case 1:
				this.value = sortedArray[0];
				this.parentNode = caller;
			
			case 2:
				this.value = Math.max(sortedArray[0], sortedArray[1]);
				this.leftChild = new Node(Math.min(sortedArray[0], sortedArray[1]), this);
				this.parentNode = caller;
			
			default:
				var median = Math.floor(size/2);
				if (size) {
					var leftSubset = sortedArray.copyOfRange(0, median-1, sortedArray);
					var rightSubset = sortedArray.copyOfRange(median+1, sortedArray.length, sortedArray);
					if (leftSubset.length) { this.leftChild = new Node(leftSubset, this); }
					this.value = sortedArray[median];
					if (rightSubset.length) { this.rightChild = new Node(rightSubset, this); }
					this.parentNode = caller;
				}
			break;
		}
	}
	
}

//Helper method
Array.prototype.copyOfRange = function(start, end, array) {
	var subset = [];
	var subsetIndex = 0;
	for (i = start; i < end; i++) {
		subset[subsetIndex] = array[i];
		subsetIndex++;
	}
	return subset;
}

//EXECUTION
var list = [0, 3, 5, 7, 9, 11];
var binaryTree = new Node(list, this);