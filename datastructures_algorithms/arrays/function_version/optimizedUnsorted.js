function insert(data) {
	if (array[0] === undefined) { array[0] = data; }
	else { array[array.length] = data; }
}

function fetch(target) {
	for (index = 0; index < array.length; index++) {
		if (array[index] === target) {
			if (index !== 0) {
				var temp = array[index-1];
				array[index-1] = array[index];
				array[index] = temp;
				delete(temp);//garbage collection
			}
			return array[index-1];
		}
	}
	return false;
}

function update(target, data) {
	for (index = 0; index < array.length; index++) {
		if (this[index] === target) { this[index] = data; }
	}
	return false;
}

function remove(target) {
	for (index = 0; index < array.length; index++) {
		if (array[index] === target) {
			if (array[index] == array[array.length-1]) {
				array.length--;
			}
			else if (array.length === 0) {
				array[index] = undefined;
			}
			else {
				array[index] = array[array.length-1];
				array.length--;
			}
		}
	}
}

var array = new Array(10);
for (i=0; i<array.length;i++){array[i] = i;}
