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

//PROTOTYPE VERSIONS
Array.prototype.update = function(target, data) {
	for (index = 0; index < this.length; index++) {
		if (this[index] === target) { this[index] = data; }
	}
	return false;
}

Array.prototype.insert = function(data) {
	if (this[0] === undefined) { this[0] = data; }
	else { this[this.length] = data; }//sync influence
}

Array.prototype.fetch = function(target) {
	for (index = 0; index < this.length; index++) {
		if (this[index] === target) { return this[index]; }
	}
	return false;
}

Array.prototype.remove = function(target) {
	for (index = 0; index < this.length; index++) {
		if (this[index] === target) {	
			if (this[index] == this[this.length-1]) {
				this.length--;
			}
			else if (this.length === 0) {
				this[index] = undefined;
			}
			else {
				this[index] = this[this.length-1];
				this.length--;
			}
		}
	}
}

var array = new Array();