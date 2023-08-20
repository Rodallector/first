 
class MinHeap {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = this.getParentIndex(currentIndex);

            if (this.heap[currentIndex] < this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }

        const min = this.heap[0];
        const lastValue = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastValue;
            this.heapifyDown();
        }

        return min;
    }

    heapifyDown() {
        let currentIndex = 0;

        while (true) {
            const leftChildIndex = this.getLeftChildIndex(currentIndex);
            const rightChildIndex = this.getRightChildIndex(currentIndex);
            let smallestIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex !== currentIndex) {
                this.swap(currentIndex, smallestIndex);
                currentIndex = smallestIndex;
            } else {
                break;
            }
        }
    }
}

// Example usage
const heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(10);
heap.insert(1);
heap.insert(7);

console.log(heap.extractMin()); // Output: 1
console.log(heap.extractMin()); // Output: 3

/*
This example implements a min-heap data structure using an array in JavaScript. The MinHeap class contains methods for insertion and extraction of the minimum element, as well as helper methods for maintaining the heap property by performing heapify operations (heapify up and heapify down).


A heap is a specialized tree-based data structure that satisfies the heap property. The heap property states that in a min-heap (or min-binary heap), for any given node, its value is smaller than or equal to the values of its child nodes. In a max-heap, the opposite is true: the value of a node is greater than or equal to the values of its child nodes.

Heap data structures are commonly used to implement priority queues, where elements are dequeued in order of their priority (i.e., the smallest element first for a min-heap and the largest element first for a max-heap). Heaps are also used in various algorithms, such as sorting algorithms like Heap Sort and graph algorithms like Dijkstra's algorithm.

There are two main types of heaps:

    Min-Heap: In a min-heap, the root node has the minimum value among all the nodes in the heap, and the heap property ensures that for every node, its value is less than or equal to the values of its children.

    Max-Heap: In a max-heap, the root node has the maximum value among all the nodes in the heap, and the heap property ensures that for every node, its value is greater than or equal to the values of its children.

Heaps are often implemented using arrays due to their compact memory layout. The parent-child relationships can be derived mathematically using array indices. This makes heap operations efficient, as insertion and extraction of elements can be performed in logarithmic time complexity.

Key operations on heaps include:

    Insertion: Adding an element to the heap while maintaining the heap property.
    Extraction: Removing the root element (minimum or maximum) from the heap while maintaining the heap property.
    Heapify: Ensuring that the heap property is maintained after an element has been modified or inserted.

In summary, a heap is a data structure that provides efficient access to the smallest (or largest) element, making it useful for scenarios where ordering based on priority is required.
*/
