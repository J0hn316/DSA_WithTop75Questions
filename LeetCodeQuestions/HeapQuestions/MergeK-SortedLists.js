// Level Hard
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.
// Examples:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

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

  insert(node) {
    this.heap.push(node);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = this.getParentIndex(currentIndex);
    while (
      currentIndex > 0 &&
      this.heap[currentIndex].val < this.heap[parentIndex].val
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    const minNode = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return minNode;
  }

  heapifyDown(index) {
    let currentIndex = index;
    while (true) {
      let leftChildIndex = this.getLeftChildIndex(currentIndex);
      let rightChildIndex = this.getRightChildIndex(currentIndex);
      let smallestIndex = currentIndex;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex].val < this.heap[smallestIndex].val
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].val < this.heap[smallestIndex].val
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
}

function mergeKLists(lists) {
  const minHeap = new MinHeap();
  // Insert the head nodes of all linked lists into the min heap
  for (let list of lists) {
    if (list) minHeap.insert(list);
  }

  const dummyHead = new ListNode();
  let current = dummyHead;

  // While the min heap is not empty, extract the minimum node and append it to the result linked list
  while (minHeap.heap.length > 0) {
    const minNode = minHeap.extractMin();
    current.next = minNode;
    current = current.next;
    if (minNode.next) {
      minHeap.insert(minNode.next);
    }
  }

  return dummyHead.next;
}

function mergeKLists(lists) {
  const minHeap = new MinHeap();
  // Insert the head nodes of all linked lists into the min heap
  for (let list of lists) {
    if (list) minHeap.insert(list);
  }

  const dummyHead = new ListNode();
  let current = dummyHead;

  // While the min heap is not empty, extract the minimum node and append it to the result linked list
  while (minHeap.heap.length > 0) {
    const minNode = minHeap.extractMin();
    current.next = minNode;
    current = current.next;
    if (minNode.next) {
      minHeap.insert(minNode.next);
    }
  }

  return dummyHead.next;
}
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const lists = [list1, list2, list3];
const mergedList = mergeKLists(lists);

// Function to print the merged list for verification
function printList(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result);
}

printList(mergedList);

// Explanation:
//ListNode Class: First, we define a ListNode class to represent each node in the linked lists. Each ListNode has a val property to store the node's value and a next property to point to the next node in the list.
// MinHeap Class: Next, we define a MinHeap class to implement the binary min heap data structure. The min heap is used to efficiently find the smallest element among all the linked lists.
// getParentIndex, getLeftChildIndex, and getRightChildIndex functions are used to calculate the indices of a node's parent, left child, and right child respectively.
// swap function swaps the positions of two nodes in the heap.
// insert function inserts a new node into the heap and maintains the heap property by performing heapify up operation.
// heapifyUp function moves a node up the heap to its correct position after insertion.
// extractMin function removes and returns the minimum node from the heap and maintains the heap property by performing heapify down operation.
// heapifyDown function moves a node down the heap to its correct position after extraction.
// mergeKLists Function: This is the main function that merges all the linked lists into one sorted linked list.
// We create an instance of the MinHeap class.
// We insert the head nodes of all linked lists into the min heap.
// We create a dummy head node for the merged list to simplify the merging process.
// We iterate over the min heap until it is empty:
// We extract the minimum node from the heap.
// We append the extracted node to the result linked list.
// If the extracted node has a next node, we insert that next node into the min heap.
// Example Usage: Finally, we create example linked lists and merge them using the mergeKLists function. We print the resulting merged list for verification.
