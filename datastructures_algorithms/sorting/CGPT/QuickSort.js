function quicksort(arr) {
    if (arr.length <= 1)
    {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const less = [];
    const equal = [];
    const greater = [];

    for (let element of arr)
    {
        if (element < pivot)
        {
            less.push(element);
        }
        else if (element > pivot)
        {
            greater.push(element);
        }
        else
        {
            equal.push(element);
        }
    }
    return [...quicksort(less), ...equal, ...quicksort(greater)];
}

const array = [8, 3, 1, 5, 9, 2];
const sortedArray = quicksort(array);
console.log(sortedArray);

/*
In this implementation, the quicksort function takes an array as input and recursively divides it into smaller sub-arrays.
It selects a pivot element (in this case, the middle element) and partitions the array into three parts: elements less than the pivot, elements equal to the pivot, and elements greater than the pivot. It then combines the sorted sub-arrays in the order: [less, equal, greater] and returns the sorted array.

Note that this is a basic implementation of Quicksort and might not be the most optimized version for all scenarios. There are various ways to optimize Quicksort further, such as by using randomized pivots or implementing three-way partitioning, but this example demonstrates the basic idea behind Quicksort
*/
