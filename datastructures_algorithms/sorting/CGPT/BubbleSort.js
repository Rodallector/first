function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++)
    {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                swap(arr, j, j + 1);
                swapped = true;
            }
        }

        if (!swapped)
        {
            // If no swaps were made in the inner loop, the array is already sorted
            break;
        }
    }
return arr;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const array = [8, 3, 1, 5, 9, 2];
const sortedArray = bubbleSort(array);
console.log(sortedArray);

/*
In this implementation, the bubbleSort function takes an array as input and performs the Bubble Sort algorithm on it. It iterates through the array multiple times, comparing adjacent elements and swapping them if they are in the wrong order. This process is repeated until the entire array is sorted. The algorithm also includes an optimization where it checks if any swaps were made during each pass. If no swaps were made, it means the array is already sorted, and the algorithm terminates early.

The swap function is a utility function used to swap elements within the array.

Bubble Sort has a time complexity of O(n^2) in the worst and average cases. It is not considered an efficient sorting algorithm for large data sets, but it is simple to implement and understand. It is mainly used for educational purposes or when dealing with small or nearly sorted arrays.
*/
