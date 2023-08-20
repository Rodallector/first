function heapsort(arr) {

    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--)
    {
        swap(arr, 0, i);
        heapify(arr, 0, i);
    }

    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;
    const start = Math.floor(n / 2) - 1;

    for (let i = start; i >= 0; i--)
    {
        heapify(arr, i, n);
    }
}

function heapify(arr, i, n) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if (left < n && arr[left] > arr[largest])
    {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest])
    {
        largest = right;
    }

    if (largest !== i)
    {
        swap(arr, i, largest);
        heapify(arr, largest, n);
    }
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


const array = [8, 3, 1, 5, 9, 2];
const sortedArray = heapsort(array);
console.log(sortedArray);

/*
n this implementation, the heapsort function takes an array as input and performs the Heapsort algorithm on it. It first builds a max-heap using the buildMaxHeap function, which rearranges the elements in the array to satisfy the max-heap property. Then, it repeatedly swaps the root element (the maximum element) with the last unsorted element, reduces the heap size, and restores the max-heap property using the heapify function. Finally, the sorted array is returned.

The heapify function takes an array, an index i, and the heap size n. It compares the element at index i with its left and right child elements, identifies the largest element, and swaps it with the element at index i. It then recursively calls heapify on the affected subtree to ensure the max-heap property is maintained.

The swap function is a utility function used to swap elements within the array.

Heapsort has a time complexity of O(n log n) and is an in-place sorting algorithm, meaning it does not require additional memory proportional to the input size.
*/
