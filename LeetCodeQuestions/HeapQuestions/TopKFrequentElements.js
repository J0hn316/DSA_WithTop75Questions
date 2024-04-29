// Level Medium
// Given an integer array numbers and an integer k, return the k most frequent elements. You may return the answer in any order.
// Examples:
// Input: numbers = [1,1,1,2,2,3], k = 2
// Output: [1,2]

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = this.getParentIndex(currentIndex);
    while (
      currentIndex > 0 &&
      this.heap[currentIndex][1] < this.heap[parentIndex][1]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    const minVal = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return minVal;
  }

  heapifyDown(index) {
    let currentIndex = index;
    while (true) {
      let leftChildIndex = this.getLeftChildIndex(currentIndex);
      let rightChildIndex = this.getRightChildIndex(currentIndex);
      let smallestIndex = currentIndex;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex][1] < this.heap[smallestIndex][1]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex][1] < this.heap[smallestIndex][1]
      ) {
        smallestIndex = rightChildIndex;
      }
      // If frequencies are equal, prioritize the element with lower value
      if (
        leftChildIndex < this.heap.length &&
        rightChildIndex < this.heap.length &&
        this.heap[leftChildIndex][1] === this.heap[rightChildIndex][1]
      ) {
        if (this.heap[leftChildIndex][0] < this.heap[rightChildIndex][0]) {
          smallestIndex = leftChildIndex;
        } else {
          smallestIndex = rightChildIndex;
        }
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

function topKFrequent(numbers, k) {
  const frequencyMap = new Map();

  // Count the frequency of each number
  for (const num of numbers) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const minHeap = new MinHeap();

  // Insert elements into the min heap
  frequencyMap.forEach((freq, num) => {
    minHeap.insert([num, freq]);
    if (minHeap.heap.length > k) {
      minHeap.extractMin();
    }
  });

  // Extract the k most frequent elements from the min heap
  const result = [];
  while (minHeap.heap.length > 0) {
    result.push(minHeap.extractMin()[0]);
  }

  return result;
}

const numbers = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(numbers, k)); // Output:  [1, 2]

// Explanation:
// Counting Frequency: First, we create a Map called frequencyMap to count the frequency of each number in the input array numbers. We iterate through the numbers array and update the counts in the frequencyMap.
// Creating Min Heap: Next, we create a MinHeap instance to store the k most frequent elements. The min heap will ensure that we always have the k smallest elements at the top, based on their frequencies.
// Insertion into Min Heap: We iterate through the entries of the frequencyMap, which contain both the number and its frequency. For each entry, we insert it into the min heap.
// If the size of the min heap exceeds k, we remove the minimum element (which has the smallest frequency) from the heap. This ensures that the heap always contains the k most frequent elements.
// Extraction of Results: After inserting all elements into the min heap, we extract the remaining elements from the heap. These elements represent the k most frequent numbers in the array.
// Returning Results: Finally, we construct an array containing only the numbers (not their frequencies) and return it as the result.
// In summary, the solution efficiently finds the k most frequent elements in the input array by counting frequencies using a hash map and maintaining the k most frequent elements using a min heap. This approach has a time complexity of O(n log k), where n is the number of elements in the array and k is the number of most frequent elements to find.
