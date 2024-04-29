// Level Hard
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.
// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

class MedianFinder {
  constructor() {
    this.maxHeap = new MaxHeap();
    this.minHeap = new MinHeap();
  }

  addNum(num) {
    if (this.maxHeap.heap.length === 0 || num <= this.maxHeap.peek()) {
      this.maxHeap.insert(num);
    } else {
      this.minHeap.insert(num);
    }

    // Balance the heaps
    if (this.maxHeap.heap.length - this.minHeap.heap.length > 1) {
      this.minHeap.insert(this.maxHeap.extractMax());
    } else if (this.minHeap.heap.length > this.maxHeap.heap.length) {
      this.maxHeap.insert(this.minHeap.extractMin());
    }
  }

  findMedian() {
    const totalElements = this.maxHeap.heap.length + this.minHeap.heap.length;
    if (totalElements % 2 === 0) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    } else {
      return this.maxHeap.peek();
    }
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    const maxVal = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return maxVal;
  }

  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (
      currentIndex > 0 &&
      this.heap[currentIndex] > this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  heapifyDown(index) {
    let currentIndex = index;
    while (true) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let largestIndex = currentIndex;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = rightChildIndex;
      }
      if (largestIndex !== currentIndex) {
        this.swap(currentIndex, largestIndex);
        currentIndex = largestIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    const minVal = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return minVal;
  }

  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  heapifyDown(index) {
    let currentIndex = index;
    while (true) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let smallestIndex = currentIndex;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestIndex]
      ) {
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

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
}

// Example usage:
const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // Output: 1.5
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // Output: 2.0

//Explanation:
// Initialization:
// We initialize the MedianFinder class, which internally creates two heaps: a max heap (maxHeap) and a min heap (minHeap). These heaps will help us efficiently maintain the elements in sorted order.
// Adding Numbers (addNum method):
// When adding a number (num) to the data structure, we first check if maxHeap is empty or if num is less than or equal to the top element of maxHeap.
// If so, we insert num into maxHeap, as it belongs to the smaller half of the elements.
// Otherwise, we insert num into minHeap, as it belongs to the larger half of the elements.
// After insertion, we balance the heaps so that the size difference between maxHeap and minHeap is at most 1. If one heap has more elements than the other, we move the top element of the larger heap to the smaller heap.
// Finding the Median (findMedian method):
// To find the median, we first calculate the total number of elements by adding the sizes of maxHeap and minHeap.
// If the total number of elements is odd, the median is the top element of maxHeap, as it contains the middle element.
// If the total number of elements is even, the median is the average of the top elements of both heaps (maxHeap and minHeap).
// We return the calculated median.
// Heap Implementations:
// The MaxHeap and MinHeap classes are implementations of binary heaps. A max heap ensures that the maximum element is at the root, while a min heap ensures that the minimum element is at the root.
// Both heaps provide methods to insert elements, extract the maximum or minimum element, and maintain the heap property (heapify up and heapify down operations).
// In summary, the MedianFinder class maintains two heaps to efficiently add numbers and find the median of all elements added so far. By using a combination of max and min heaps, we can achieve O(log n) time complexity for adding a number and O(1) time complexity for finding the median, where n is the total number of elements added. This approach ensures that the code is efficient and can handle large datasets effectively.
