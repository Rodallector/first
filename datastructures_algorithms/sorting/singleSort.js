function singleSort(list, tally, pointer) {

	var copyList = list;

	if (!pointer) {
		pointer = 0;
		if (!tally) {
			tally = copyList.length;
		}
	}

	while (tally) {
		let current = copyList[pointer];
		let next = copyList[pointer + 1];

		if (next < current) {
			copyList[pointer] = next;
			copyList[pointer+1] = current;
		}

		--tally;
		++pointer;
	}

	return copyList;

}

unorderedList = [1, 9, 7, 2, 3, 5, 0, 6, 4, 8];
var newList = singleSort(unorderedList, unorderedList.length, 0);
