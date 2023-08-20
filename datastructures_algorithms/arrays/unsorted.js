Array.prototype.fetch = function(target) {
	for (index = 0; index < this.length; index++) {
		if (this[index] === target) {
			return index;
		}
	}
	return false;
}

Array.prototype.multiFetch = function(targetValue) {
	let indexList = new Array();
	for (index = 0; index < this.length; index++) {
		if (this[index] === targetValue) {
			indexList[indexList.length++] = index;
		}
	}
	return indexList;
}

Array.prototype.convergingFetch = function(target) {
	let R = 1;
	let L = 0;
	while(L < Math.ceil(this.length/2)) {
		if (this[L] === target) {
			return L;
		} L++;
		if (this[this.length - R] === target) {
			return (this.length - R);
		} R++;
	}
	return false;
}

Array.prototype.update = function(target, data) {
	for (index = 0; index < this.length; index++) {
		if (this[index] === target) {
			this[index] = data;
			return true;
		}
	}
	return false;
}

Array.prototype.insert = function(data) {
	this[this.length] = data;
}

Array.prototype.remove = function(target) {	
	for (index = 0; index < this.length; index++) {
		if (this[index] === target) {
			if (this[index] == this[this.length-1]) { //target is the last item
				this.length--;
				return true;
			}
			else if (index == 0) { //target is the first item
				if (this.length == 0) { //only one item exists
					this[0] = undefined;
					this.length = 0;
					return true;
				} else {
					this[index] = this[this.length-1];
					this.length--;
					return true;
				}
			}
			else {
				this[index] = this[this.length-1];
				this.length--;
				return true;
			}
		}
	}
	return false;
}

var list = new Array();

for (let i = 0; i < 10; i++) {
	list[i] = Math.ceil(Math.random() * 100);
}