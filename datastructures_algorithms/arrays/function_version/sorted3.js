this.prototype.insert = function(data) {
	
	data = data || undefined;
	var lower = 0;
	var upper = this.length-1;
	var mid = Math.ceil(upper/2);

	while ((data > this[mid] || data < this[mid - 1])) {
		if (data < this[mid]) {
			upper = mid - 1;
			mid = Math.floor((lower + upper)/2); //new midpoint for next iteration
		}
		else if (data > this[mid]) {
			lower = mid + 1;
			mid = Math.floor((lower + upper)/2);
		}
		else {
			//data == this[mid];
			break;
		}
	}

	//this.length++; other languages may require this

	for (j = this.length; j > mid; j--) {
		this[j] = this[j - 1];
	}

	this[mid] = data;	
}

debugger;
let x = [1, 2, 3, 5, 6, 7];
x.insert(4);