// Level: Hard
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// We define a class ListNode to represent each node in the linked list.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinPriorityQueue {
  constructor(options = {}) {
    this.elements = [];
    this.priorityFn = options.priority || ((x) => x);
  }
  enqueue(element) {
    // Adds an element to the priority queue.
    this.elements.push(element);
    this.bubbleUp(this.elements.length - 1);
  }
  dequeue() {
    //  Removes and returns the element with the minimum priority.
    const min = this.elements[0];
    const last = this.elements.pop();
    if (this.elements.length > 0) {
      this.elements[0] = last;
      this.sinkDown(0);
    }
    return min;
  }
  peek() {
    return this.elements[0];
  }
  isEmpty() {
    return this.elements.length === 0;
  }
  size() {
    return this.elements.length;
  }
  // The bubbleUp and sinkDown methods are used internally to maintain the heap property of the priority queue.
  bubbleUp(index) {
    let currentIndex = index;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        this.priorityFn(this.elements[currentIndex]) <
        this.priorityFn(this.elements[parentIndex])
      ) {
        [this.elements[currentIndex], this.elements[parentIndex]] = [
          this.elements[parentIndex],
          this.elements[currentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }
  sinkDown(index) {
    let currentIndex = index;
    const length = this.elements.length;
    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let smallestIndex = currentIndex;
      if (
        leftChildIndex < length &&
        this.priorityFn(this.elements[leftChildIndex]) <
          this.priorityFn(this.elements[smallestIndex])
      )
        smallestIndex = leftChildIndex;
      if (
        rightChildIndex < length &&
        this.priorityFn(this.elements[rightChildIndex]) <
          this.priorityFn(this.elements[smallestIndex])
      )
        smallestIndex = rightChildIndex;
      if (smallestIndex !== currentIndex) {
        [this.elements[currentIndex], this.elements[smallestIndex]] = [
          this.elements[smallestIndex],
          this.elements[currentIndex],
        ];
        currentIndex = smallestIndex;
      } else {
        break;
      }
    }
  }
}

function mergeKLists(list) {
  if (!list || list.length === 0) return null;

  // Define a priority queue to store nodes based on their values
  const priorityQueue = new MinPriorityQueue({ priority: (node) => node.val });

  // Add the heads of all lists to the priority queue
  for (const head of list) {
    if (head) priorityQueue.enqueue(head);
  }

  // Create a dummy node to serve as the head of the merged list
  const dummy = new ListNode(-1);
  let current = dummy;

  // Merge the lists by dequeuing the smallest node from the priority queue
  while (!priorityQueue.isEmpty()) {
    const smallest = priorityQueue.dequeue().element;
    current.next = smallest;
    current = current.next;
    if (smallest.next) priorityQueue.enqueue(smallest.next);
  }
  // Return the head of the merged list (excluding the dummy node)
  return dummy.next;
}

// We define the mergeKLists function that takes an array of linked lists lists as input and returns the head of the merged sorted list.
// We handle edge cases: if lists is null or empty, we return null.
// We create a priority queue (priorityQueue) to store nodes from all lists based on their values. We use a Min Priority Queue implementation,
// where the priority is determined by the value of the node.
// We add the heads of all lists to the priority queue.
// We create a dummy node (dummy) to serve as the head of the merged list, and a current pointer to keep track of the current node in the merged list.
// We enter a loop where we dequeue the smallest node from the priority queue and link it to the merged list.
// If the dequeued node has a next node, we enqueue it back into the priority queue.
// We continue this process until the priority queue is empty.
// Finally, we return the head of the merged list (excluding the dummy node).
