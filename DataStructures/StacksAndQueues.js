// Stacks and Queue data structure
// Both can be made using Arrays and LinkedLists
// With Stacks Arrays are slightly faster than LinkLists but LinkList has more dynamic memory allocation.
// With Queues you would want to use LinkLists over Arrays  because of the FIFO-First In First Out nature of queues.

// Stack Example using LinkLists

class Node1 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    // if (this.isEmpty()) throw new Error("Can't Peak on an empty stack");
    return this.top;
  }
  push(value) {
    let newNode = new Node1(value);
    if (this.length === 0) {
      //  If the stack is empty set both top and bottom to new node
      this.top = newNode;
      this.bottom = newNode;
    } else {
      //   otherwise just set next of new node to current Bottom and update Bottom
      const pointer = this.top;
      this.top = newNode;
      this.top.next = pointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) return null;
    let temp = this.top;
    this.top = this.top.next;
    --this.length;
    if (this.length === 0) {
      this.bottom = null;
    }
    return temp.value;
  }
}

const myStack = new Stack();

// console.log(myStack.peek());
//myStack.push(5);
//myStack.push(10);
//myStack.push(15);
//console.log(myStack);
//myStack.pop();
//console.log(myStack); //  Output: [5, 10]

// Stack Example using Arrays

class Node2 {
  constructor() {
    this.array = [];
  }
}

class Stack2 {
  constructor() {
    this.node = new Node2();
  }
  peek() {
    return this.node.array[this.node.array.length - 1];
  }
  push(val) {
    this.node.array.push(val);
    return this;
  }
  pop() {
    this.node.array.pop();
    return this;
  }
}

let myStack2 = new Stack2();
myStack2.push(3);
myStack2.push(6);
console.log(myStack2); //  Output: Stack { array: [3,  6], node: Node2 {} }
myStack2.pop();
myStack2.pop();
console.log(myStack2);
console.log(myStack2.peek());
