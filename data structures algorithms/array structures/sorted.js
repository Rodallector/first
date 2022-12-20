function insert(data) {
	var lower = 0;
	var upper = array.length-1;
	var mid = Math.ceil(upper/2);
	
	while (!(data < array[mid] && data > array[mid - 1])) {
		if (data < array[mid]) {
			upper = mid - 1;
		}
		else if (data > array[mid]) {
			lower = mid + 1;
		}
		else {
			//data = array[mid]
			break;
		}
		mid = Math.floor((lower + upper)/2); 
	}
	
	array.length++;
	
	for (j = array.length; j >= mid; j--) {
		array[j] = array[j - 1];
	}
	
	array[mid] = data;
	
}

function update(target, data) {
	var success = fetch(target);
	if (success) {
		array[success] = data;
	}
	else { return false; }
}

function fetch(target) {
	var upper = array.length-1;
	var lower = 0;
	var mid = Math.ceil(upper/2);
	
	while(target !== array[mid] && upper !== lower && mid !== upper) {
		if (target > array[mid]) {
			lower = mid;
		}
		else {
			upper = mid;
		}
		mid = Math.floor((upper + lower)/2);
	}
	
	if (array[mid] === target) { 
		return mid;
	}
	else { return false; }
}

function remove(target) {
	var success = fetch(target);
	if (success) {
		for (var i = success; i < array.length; i++) {
			array[i] = array[i+1];
			array.length--;
		}
	}
	else { return false; }
}

//execution
var array = new Array(100);

for (i = 0; i < array.length; i++) {
	array[i] = i;
}