function merge(left, right) {

	var result = []; //stores the sorted items
	var Lp, Rp, resultP; //as items are cycled in the left and right list, Lp and Rp tally their index
	Lp = Rp = resultP = 0; //resultP is a pointer to keep track of the index of array result[]

	while (Lp < left.length || Rp < right.length)
	{
		if (Lp < left.length && Rp < right.length)
		{
			if ( left[Lp] < right[Rp] )
			{
				result[resultP++] = left[Lp++]; //item in the left list is lesser
			}
			else
			{
				result[resultP++] = right[Rp++]; //item in the right list is lesser
			}
		}
		else if (Lp < left.length)
		{
			result[resultP++] = left[Lp++]; //elements only remain in left list
		}
		else if (Rp < right.length) 
		{
			result[resultP++] = right[Rp++]; //elements only remain in right list
		}
	}
	return result;
}

function topDownMergeSort(list) {

	if (list.length <= 1) //recursion termination condition
	{
		return list;
	}

	var left_half = Math.floor(list.length/2); //determine midpoint
	var right_half = Math.floor(list.length/2 + (list.length%2)); //handle odd list size

	//store list halves
	var left = [];
	var right = [];

	var R = 0; //sync right's index with list's index

	for (i = 0; i < list.length; i++) //performs the halving of a list
	{	
		if (i < (left_half))
		{
			left[i] = list[i];
		}
		
		if (i >= right_half || i == left_half)
		{
			right[R] = list[i];
			R++;
		}
	}

	var sorted = []; //stores returned sorted-lists
	left = topDownMergeSort(left);
	right = topDownMergeSort(right);
	sorted = merge(left, right);
	return sorted; //returns the result of a stack back up a recursive level; returns to left and right

}

var unorderedList = [1, 7, 4, 9, 6, 3, 5, 2, 8];
document.write(topDownMergeSort(unorderedList));
