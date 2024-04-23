// Level: Medium
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

//  We define a class ListNode to represent each node in the linked list.
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNthFromEnd(head, n) {
  // Create a dummy node to handle edge cases
  const dummy = new ListNode(-1);
  dummy.next = head;

  let first = dummy;
  let second = dummy;

  // Move the second pointer ahead by n+1 steps
  for (let i = 0; i <= n; i++) second = second.next;

  // Move both pointers until the second pointer reaches the end
  while (second !== null) {
    first = first.next;
    second = second.next;
  }

  // Remove the nth node by updating the next pointer of the node before it
  first.next = first.next.next;

  // Return the head of the list (excluding the dummy node)
  return dummy.next;
}

// We define the removeNthFromEnd function that takes the head of the linked list head and the value of n as input and
// returns the head of the modified list.
// We create a dummy node (dummy) to handle edge cases where the node to be removed is the first node.
// We initialize two pointers, first and second, both pointing to the dummy node.
// We move the second pointer ahead by n + 1 steps. This ensures that the distance between first and second is n.
// We move both pointers until the second pointer reaches the end of the list. At this point,
// the first pointer will be pointing to the node before the one to be removed.
// We remove the nth node by updating the next pointer of the node before it to skip over it.
// Finally, we return the head of the modified list (excluding the dummy node).
