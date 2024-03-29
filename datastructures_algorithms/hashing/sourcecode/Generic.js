//A generic implementation of creating a table for hashing

export class HashTable {

	constructor() {
		this.table  = new Array(137);
		this.values = [];
	}

	hash(string) {
		const H   = 37;
		let total = 0;

		for (var i = 0; i < string.length; i++) {
			total += H * total + string.charCodeAt(i);
		}

		total %= this.table.length;

		if (total < 1) {
			this.table.length - 1;
		}

		return parseInt(total);
	}

	showDistro() {
		for (const key in this.table) {

			if(this.table[key] !== undefined) {
				console.log(key, ' : ', this.table[key]);
			}

		}
	}

	put(data) {
		const pos = this.hash(data);
		this.table[pos] = data;
	}

	get(key) {
		return this.table[this.hash(key)];
	}

}
