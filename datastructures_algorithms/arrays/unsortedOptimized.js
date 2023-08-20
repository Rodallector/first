Array.prototype.insert = function(data) {
	this[this.length] = data;
	return true;
}

Array.prototype.fetch = function(target) {
	for (index = 0; index < this.length; index++) {
		if (this[index] === target) {
			if (index !== 0) {
				//optimization
				let temp = this[index-1];
				this[index-1] = this[index];
				this[index] = temp;
				delete(temp); //garbage collection
			}
			return this[index-1];
		}
	}
	return false;
}
//use array.from()

Array.prototype.update = function(target, data) {
	let i = this.length;
	while(i--) {
		if (this[i] === target) {
			this[i] = data;
		}
	}
}

Array.prototype.remove = function(target) {
	for (index = 0; index < this.length; index++) {
		if (this[index] === target) {
			if (this[index] === this[this.length-1]) {
				this.length--;
				return true;
			}
			else if (index === 0) {
				if (this.length === 0) {
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

debugger;
var list = new Array();
list.insert(1);
list.insert(2);
list.insert(3);
x = list.fetch(3);