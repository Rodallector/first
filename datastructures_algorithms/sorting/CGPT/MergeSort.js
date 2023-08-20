function mergeSort(arr) {

    if (arr.length <= 1)
    {
        return arr;
    }

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length)
    {
        if (left[leftIndex] < right[rightIndex])
        {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else
        {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const array = [8, 3, 1, 5, 9, 2];
const sortedArray = mergeSort(array);
console.log(sortedArray);

/*
n this implementation, the mergeSort function takes an array as input and recursively divides it into smaller sub-arrays until each sub-array has only one element or is empty. Then, the merge function is used to merge these sorted sub-arrays back together, creating a larger sorted array. The merge function compares the elements from the left and right sub-arrays and adds the smaller element to the result array. Finally, it concatenates any remaining elements from the left and right sub-arrays to the result array.

The Merge Sort algorithm has a time complexity of O(n log n), where n is the number of elements in the array. It is known for its stability and is widely used in practice.
*/
