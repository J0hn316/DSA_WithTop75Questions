// Level: Easy
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// We define a class ListNode to represent each node in the linked list.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  if (!list1 && !list2) return null;

  let dummy = new ListNode();
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  current.next = list1 || list2;

  return dummy.next;
}

function mergeTwoLists2(l1, l2) {
  // Create a dummy node to serve as the head of the merged list
  const dummy = new ListNode(-1);
  let current = dummy;

  // Compare values of nodes from both lists and link them accordingly
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Link the remaining nodes from either list, if any
  current.next = l1 !== null ? l1 : l2;

  // Return the head of the merged list (excluding the dummy node)
  return dummy.next;
}

// We define the mergeTwoLists function that takes the heads of two sorted linked lists (l1 and l2) as input and returns the head of the merged sorted list.
// We create a dummy node (dummy) to serve as the head of the merged list. This dummy node helps simplify the merging process.
// We initialize a current pointer to keep track of the current node in the merged list.
// We enter a loop where we compare the values of nodes from both lists (l1 and l2). We link the node with the smaller value to the merged list, and advance the corresponding pointer (l1 or l2).
// We continue this process until either l1 or l2 becomes null, indicating that we have reached the end of one of the lists.
// After the loop, we link the remaining nodes from either list (if any) to the merged list.
// Finally, we return the head of the merged list (excluding the dummy node).
