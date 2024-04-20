// Queue Data Structure

class Node1 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(val) {
    // Add to queue
    const newNode = new Node1(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    // Remove from front of the queue
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue(5);
myQueue.enqueue(10);
myQueue.dequeue();
console.log(myQueue); // Output: 5
