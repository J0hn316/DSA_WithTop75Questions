// Level: Easy
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// We define a class ListNode to represent each node in the linked list.
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}

// ChatGPT answer

function hasCycle1(head) {
  // If the list is empty or has only one node, it cannot have a cycle
  if (!head || !head.next) return false;

  // Slow pointer moves one step at a time
  let slow = head;
  // Fast pointer moves two steps at a time
  let fast = head.next;

  while (slow !== fast) {
    // If fast pointer reaches the end of the list, there is no cycle
    if (!fast || !fast.next) return false;

    // Move slow pointer one step
    slow = slow.next;

    // Move fast pointer two steps
    fast = fast.next.next;
  }
  // If slow and fast pointers meet, there is a cycle
  return true;
}

// We define the hasCycle function that takes the head of the linked list as input and returns true if there is a cycle, otherwise false.
// We handle edge cases first: if the list is empty or has only one node (head or head.next is null),
// then there cannot be a cycle, so we return false.
// We initialize two pointers, slow and fast, pointing to the head and the next node of the head, respectively.
// We enter a loop where the condition for termination is that slow and fast pointers meet. If they meet, it indicates a cycle.
// In each iteration of the loop, we move slow one step forward and fast two steps forward.
// If fast reaches the end of the list (fast or fast.next is null), it means there is no cycle, and we return false.
// If slow and fast meet during the loop, we return true, indicating the presence of a cycle.
