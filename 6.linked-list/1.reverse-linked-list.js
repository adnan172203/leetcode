class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next; // Save the reference to the next node.

    // Reverse the direction of the next pointer.
    current.next = prev;

    // Move one step forward in the original list.
    prev = current;
    current = nextNode;
  }

  return prev;
}

reverseLinkedList([1, 2, 3, 4, 5]);

// Example Walkthrough
// Let's say we have a linked list represented as: 1 -> 2 -> 3 -> 4 -> 5 -> null.

// Initial State:

// prev = null
// current = 1
// First Iteration:

// nextNode = 2
// Reverse: 1.next = null (now 1 points to null)
// Move: prev = 1, current = 2
// Second Iteration:

// nextNode = 3
// Reverse: 2.next = 1 (now 2 points to 1)
// Move: prev = 2, current = 3
// Third Iteration:

// nextNode = 4
// Reverse: 3.next = 2 (now 3 points to 2)
// Move: prev = 3, current = 4
// Fourth Iteration:

// nextNode = 5
// Reverse: 4.next = 3 (now 4 points to 3)
// Move: prev = 4, current = 5
// Fifth Iteration:

// nextNode = null
// Reverse: 5.next = 4 (now 5 points to 4)
// Move: prev = 5, current = null
// End of Loop:

// Now current is null, so we exit the loop.
// Return:

// We return prev, which is now pointing to 5, the new head of the reversed list.
// Final Result
// The reversed linked list is: 5 -> 4 -> 3 -> 2 -> 1 -> null.
