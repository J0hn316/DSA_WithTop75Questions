// Example of LinkedList 93-->16-->3

let myLinkList = {
  head: {
    value: 93,
    next: {
      value: 16,
      next: {
        value: 3,
        next: null,
      },
    },
  },
};

class Node1 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// The Class Node above does the same const newNode = { value:value, next:null}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node1(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw Error('Invalid Index');
    }
    const newNode = new Node1(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
    return this;
  }

  // another version of above code
  insert1(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw Error('Invalid Index');
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let previousNode = this._getNode(index - 1);
      let currentNode = previousNode.next;
      previousNode.next = currentNode.next;
    }
    this.length--;
    return this;
  }

  remove1(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  _getNode(index) {
    if (index < 0 || index >= this.length) {
      throw Error(`Index not in range`);
    }
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
  reverse() {
    // empty list or only one item left, no need to reverse
    if (!this.head || !this.head.next) {
      return this;
    }
    let prev = null;
    let curr = this.head;
    let next = curr.next;
    while (curr !== null) {
      curr.next = prev;
      prev = curr;
      curr = next;
      next = curr ? curr.next : null;
    }
    this.head = prev;
    return this;
  }
  reverse1() {
    if (!this.head.next) return this.head;

    let first = this.head;
    console.log('first: ', first);
    this.tail = this.head;
    let second = first.next;
    console.log('second: ', second);

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkList1 = new LinkedList(10);
myLinkList1.append(5);
myLinkList1.append(16);
myLinkList1.prepend(1);
myLinkList1.insert(1, 100);
console.log(myLinkList1.printList());
//myLinkList1.remove(1);
//console.log('\nAfter removing the element at index 1:');
//console.log(myLinkList1.printList()); // output  : [1, 100,  5, 16]
// After removing the element at  index 1: 100 5 16
// The method _getNode is a helper function that takes an index as input and returns the node at that index. If the index is out
// console.log(myLinkList1);
// myLinkList1.reverse();
// console.log(myLinkList1.printList());
console.log(myLinkList1.reverse1());
