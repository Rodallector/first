Array.prototype.insert = function(data) {
	
	var lower = 0;
	var upper = this.length-1;
	var mid = Math.ceil(upper/2);

	//special case 1
	if (this[lower] == undefined) {
		this[lower] = data;
		return true;
	}
	
	//special case 2
	if (data < this[lower]) {
		for (i = this.length; i > lower; i--) {
			this[i] = this[i-1];
		}
		this[lower] = data;
		return true;
	}
	
	//special case 3
	if (data > this[upper]) {
		this[this.length] = data;
		return true;
	}
	
	while ( data < this[mid - 1] || data > this[mid] ) {
		
		if (data < this[mid]) {
			upper = mid - 1; //eliminate top half of list
			mid = Math.floor((lower + upper)/2); //set new midpoint
		}
		
		if (data > this[mid]) {
			lower = mid + 1; //eliminate bottom half of list
			mid = Math.floor((lower + upper)/2); //set new midpoint
		}
	}
	
	for (j = this.length; j > mid; j--) {
		this[j] = this[j - 1];
	}
	
	this[mid] = data;
	return mid;	
}

Array.prototype.fetch = function(target) {

	var lower = 0;
	var upper = this.length-1;
	var mid = Math.ceil(upper/2);
	
	//special case 1
	if (this[lower] === undefined) {
		console.log("subset is empty");
		return false;
	}
	
	//special case 2
	if (target < this[lower]) {
		return false;
	}
	
	//special case 3
	if (target > this[upper]) {
		return false;
	}
	
	while ( target < this[mid] || target > this[mid]) {
		if (target < this[mid]) {
			upper = mid;
			mid = Math.floor((lower + upper)/2);
		}
		
		if (target > this[mid]) {
			lower = mid;
			mid = Math.ceil((lower + upper)/2);
		}
	}

	return mid;
	
}

Array.prototype.update = function(target, data) {
	return x = this.fetch(target) ? x:false;
}

Array.prototype.remove = function(target) {
	if (x = this.fetch(target)) {
		for (i = x; i < this.length; i++) {
			this[i] = this[i+1];
		}
		this.length--;
		return true;
	}
	return false;
}

var list = new Array();
for (i = 0; i < 10; i++) {
	list[i] = i;
}
