// Level: Medium
// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → ...
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reorderList(head) {
  if (!head || !head.next) return;

  // Step 1: Find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Split the list into two halves at the middle node
  let secondHalf = slow.next;
  slow.next = null;

  // Step 2: Reverse the second half of the linked list
  let prev = null;
  let current = secondHalf;

  while (current) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  secondHalf = prev;

  // Step 3: Merge the first half with the reversed second half
  let firstHalf = head;

  while (firstHalf && secondHalf) {
    const nextFirst = firstHalf.next;
    const nextSecond = secondHalf.next;

    firstHalf.next = secondHalf;
    secondHalf.next = nextFirst;

    firstHalf = nextFirst;
    secondHalf = nextSecond;
  }
}

// We define the reorderList function that takes the head of the linked list head as input and reorders
// the list according to the specified pattern.
// In Step 1, we use the "fast-slow" pointer technique to find the middle of the linked list.
// Once found, we split the list into two halves at the middle node.
// In Step 2, we reverse the second half of the linked list.
// In Step 3, we merge the first half with the reversed second half.
// We do this by iterating through both halves simultaneously and adjusting the next pointers accordingly to achieve the desired order.
