//UNSORTED-ARRAY FUNCTIONS
function insert(data) {
	if (array[0] === undefined) { array[0] = data; }
	else { array[array.length] = data; } //sync influential
}

function fetch(target) {
	for (index = 0; index < array.length; index++) {
		if (array[index] === target) {
			return array[index];
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