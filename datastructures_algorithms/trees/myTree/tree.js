class Node {
	
	value;
	leftChild;
	rightChild;
	parentNode;
	
	constructor(array, iteration, index, caller, right){
		try {
			
			this.value = array[median];
			delete( array[median] );
			this.leftChild = new Node(array, ++iteration, ++index, this, false);
			this.rightChild = new Node(array, ++iteration, ++index, this, true);
			this.parentNode = this.caller;
			
		}
		catch {
			return;
		}
	}
	
}

var sortedList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//projections
var size = sortedList.length;
var mod = size%2;
var branches = Math.ceil((size-1)/2);
//initial node values
var median = Math.floor(size/2);
var left = median/2;
var right = median + left;
//implementation
debugger;
var tree = new Node(sortedList, 0, median, this, false);

/*
	initial node = median
	median/2 until < 1 and return
	index - last + current = next index
	
	could create an array with indexes rearranged so that nodes can be created in a straight cycle
	
	return conditions:
	index out of bounds
	array[index] error
	array[index.value] == undefined
	
	could create a stack to hold values of distance for right calculations
	instead of copy of range, use trim of range
	based on relative indexing and a function
*/