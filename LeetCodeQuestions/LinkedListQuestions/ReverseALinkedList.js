// Level: Easy
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// We define a class ListNode to represent each node in the linked list.
// Each node has a value val and a pointer next to the next node in the list.
// The default value of next is null.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    const nextTemp = current.next;
    current.next = prev;
    [prev, current] = [current, nextTemp];
  }
  return prev;
}

let node1 = new ListNode(1);
node1.next = new ListNode(2);

const node3 = new ListNode(3);
node1.next.next = node3;

console.log(reverseList(node1)); // Expected: 3 ->  2 -> 1

// ChatGPT answer

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

// We define the reverseLinkedList function that takes the head of the linked list as input and returns the head of the reversed list.
// Inside the function, we initialize two variables prev and current.
// prev will keep track of the previous node, and current will traverse the list.
// We use a while loop to iterate through the list. We continue the loop until current becomes null,
// which means we have reached the end of the original list.
// Inside the loop, we store the next node of current in a variable nextNode.
// This is because we will be modifying the current.next pointer, and we need to keep track of the next node before we modify it.
// We then reverse the current.next pointer by pointing it to the previous node (prev).
// After reversing the pointer, we update prev to current and move current to the next node (nextNode) to continue traversing the list.
// Finally, we return prev, which now points to the head of the reversed list.
