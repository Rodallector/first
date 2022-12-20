// HashTable with Build Chains technique of collision-resolution

export class HashTableChains extends HashTable {
	
	constructor() {
		super();
		this.buildChains();
	}
	
	buildChains() {
		for (var i = 0; i < this.table.length; i++) {
			this.table[i] = new Array();
		}
	}

	showDistro() {
		for (const key in this.table) {
			if(this.table[key][0] !== undefined) {
				console.log(key, ' : ', this.table[key]);
			}
		}
	}

	put(key, data) {
		const pos = this.hash(key);
		let index = 0;
		
		if (this.table[pos][index] === undefined) {
			this.table[pos][index] = data;
		}
		else {
			++index;
			
			while (this.table[pos][index] !== undefined ) {
				index++;
			}
			
			this.table[pos][index] = data;
		}
		
	}

	get(key) {
		const pos = this.hash(key);
		let index = 0;
		
		while (this.table[pos][index] != key) {
			if(this.table[pos][index] !== undefined) {
				return this.table[pos][index]
			}
			else {
				return undefined;
			}
			index++;
		}
	}
	
}