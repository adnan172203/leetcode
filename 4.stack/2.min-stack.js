class MinStack {
  constructor() {
    this.stack = []; // Main stack to hold all elements
    this.minStack = []; // Auxiliary stack to hold minimum values
  }

  push(val) {
    this.stack.push(val); // Push the value onto the main stack
    // If the minStack is empty or the current value is less than or equal to the current minimum, push it onto the minStack
    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    const poppedValue = this.stack.pop(); // Remove the top element from the main stack
    // If the popped value is the same as the minimum value, pop it from the minStack as well
    if (poppedValue === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1]; // Return the top element of the main stack
  }

  getMin() {
    return this.minStack[this.minStack.length - 1]; // Return the top element of the minStack (minimum value)
  }
}

// Example usage:
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top()); // Output: 0
console.log(minStack.getMin()); // Output: -2
