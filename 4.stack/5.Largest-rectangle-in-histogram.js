function largestRectangleArea(heights) {
  let stack = [];
  let maxArea = 0;

  for (let i = 0; i <= heights.length; i++) {
    while (
      stack.length > 0 &&
      (i === heights.length || heights[i] < heights[stack[stack.length - 1]])
    ) {
      let height = heights[stack.pop()];
      let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    // If the current height is greater than the height of the stack top,
    // push its index to the stack
    stack.push(i);
  }

  return maxArea;
}

// Test cases
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // Output: 10
// console.log(largestRectangleArea([2, 4])); // Output: 4

// Suppose we have an array representing the heights of bars in a histogram: [2, 1, 5, 6, 2, 3].

// We initialize an empty stack and set maxArea to 0.

// We iterate through each bar's height in the histogram. At each step:

// If the current height is greater than the height of the bar at the top of the stack, we push the index of the current bar onto the stack.

// If the current height is less than the height of the bar at the top of the stack, we keep popping bars off the stack until the height of the bar at the top of the stack is less than or equal to the current height. While popping, we calculate the area of the rectangle formed by the popped bar and update maxArea if necessary.

// For each popped bar, we calculate its height and width to determine the area. The height is the height of the popped bar, and the width is the distance from the current bar to the previously popped bar (or the start of the histogram if the stack is empty).

// Finally, we return the maximum area.

// ====:Tracking the Backward Index:====

// The backward index is effectively tracked by the stack. When you pop an index from the stack, you can determine the width of the rectangle that can be formed with that height by looking at the next index in the stack (if it exists). This allows you to calculate how far back the rectangle can extend.

// If the stack is empty after popping, it means that the popped height was the smallest so far, and the rectangle can extend all the way back to the beginning of the histogram.

// If the stack is not empty, the width is determined by the difference between the current index and the index of the new top of the stack, which gives the width of the rectangle that can be formed with the height of the popped index.

// Example
// For the input [2, 1, 5, 6, 2, 3], when processing the height 1 at index 1, the stack will pop the index 0 (height 2), and the width will be calculated as 1 - 0 - 1 = 0, which means the rectangle can extend back to the start of the histogram. This mechanism allows the algorithm to efficiently calculate the maximum area of rectangles in the histogram.

// The idea is , the moment we see dip, we process the top of stack item in backward direction.

// Example Walkthrough
// Let's walk through the specific case of the input [2, 1, 5, 6, 2, 3] to see how the width is calculated when the height at index 1 is processed.

// Initial Heights: [2, 1, 5, 6, 2, 3]
// Stack: Initially empty.
// Iteration Steps
// i = 0:

// Current height = 2
// Stack: [0] (push index 0)
// i = 1:

// Current height = 1
// Since 1 < 2 (the height at index 0), we enter the while loop:
// Pop index 0 from the stack. The height is 2.
// Now, calculate the width:
// The stack is empty after popping, so the width is i - 0 = 1 - 0 = 1.
// Calculate the area: height * width = 2 * 1 = 2.
// Update maxArea to 2.
// Now push index 1 onto the stack.
// Stack: [1]
// i = 2:

// Current height = 5
// Stack: [1, 2] (push index 2)
// i = 3:

// Current height = 6
// Stack: [1, 2, 3] (push index 3)
// i = 4:

// Current height = 2
// Since 2 < 6, we pop index 3:
// Height = 6
// Width = i - stack[stack.length - 1] - 1 = 4 - 2 - 1 = 1
// Area = 6 * 1 = 6
// Update maxArea to 6.
// Now, since 2 < 5, we pop index 2:
// Height = 5
// Width = 4 - 1 - 1 = 2
// Area = 5 * 2 = 10
// Update maxArea to 10.
// Push index 4 onto the stack.
// Stack: [1, 4]
// i = 5:

// Current height = 3
// Stack: [1, 4, 5] (push index 5)
// i = 6:

// Current height = 0 (this is a virtual height to ensure we process remaining bars)
// Since 0 < 3, we pop index 5:
// Height = 3
// Width = 6 - 4 - 1 = 1
// Area = 3 * 1 = 3
// maxArea remains 10.
// Since 0 < 2, we pop index 4:
// Height = 2
// Width = 6 - 1 - 1 = 4
// Area = 2 * 4 = 8
// maxArea remains 10.
// Since 0 < 1, we pop index 1:
// Height = 1
// Width = 6 - 0 - 1 = 5
// Area = 1 * 5 = 5
// maxArea remains 10.
// Summary of Width Calculation
// When the height at index 1 (which is 1) is processed, the width is calculated based on the current index i and the index of the new top of the stack after popping

// https://www.youtube.com/watch?v=ZGMw8Bvpwd4
