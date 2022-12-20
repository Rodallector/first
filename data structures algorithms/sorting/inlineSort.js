function inlineSort(list, tally, pointer) {	
	
	//provide default values
	if (!pointer) {
		pointer = 0; //pointer - which index to begin at each recursion step
		if (!tally) {
			tally = list.length; //how many times algorithm will repeat
		}
	}
	
	while (tally) {
		
		let current = pointer;
		let next = pointer + 1;
		let temp;
		let terminator = 0;
		
		while (next < list.length) {
			if (list[next] < list[current]) {
				temp = list[current];
				list[current] = list[next];
				list[next] = temp;
				terminator++;
			}
			next++;
		}
		
		if (terminator === 0) {
			//list is already sorted
			tally = 1;
		}

		--tally;
		++pointer;
		
	}
	
}

var unorderedList = [9, 1, 7, 3, 2, 5, 0, 6, 4, 8];
inlineSort(unorderedList);