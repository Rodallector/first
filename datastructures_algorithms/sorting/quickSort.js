function swap(items, leftIndex, rightIndex) {
	var temp = items[leftIndex];
	items[leftIndex] = items[rightIndex];
	items[rightIndex] = temp;
}

function partition( items, left, right) {

	var pivot = items[Math.floor((right + left)/2)]; //middle element
	L = left;
	R = right;

	while (L <= R)
	{
		while (items[L] < pivot)
		{
			L++;
		}

		while (items[R] > pivot)
		{
			R--;
		}

		if (L <= R)
		{
			swap(items, L, R); //swap two items only
			L++;
			R--;
		}
	}

	return L;
}

function quickSort(items, left, right) {

	var index;

	if (items.length > 1)
	{
		//index returned from partition
		index = partition(items, left, right);
	}

	if (left < index - 1)
	{
		//more elements on the left side of pivot
		quickSort(items, left, index -1);
	}

	if (index < right)
	{
		//more elements on the right side of pivot
		quickSort(items, index, right);
	}

	return items;
}

var items = [1, 7, 4, 9, 6, 3, 5, 2, 8];
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray);
