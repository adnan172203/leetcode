// const trap = (height) => {
//   if (!height) return 0;

//   let left = 0;
//   let right = height.length - 1;

//   let leftMax = height[left];
//   let rightMax = height[right];
//   let res = 0;

//   while (left < right) {
//     if (leftMax < rightMax) {
//       left += 1;
//       leftMax = Math.max(leftMax, height[left]); // leftmax =1 , height=0
//       res += leftMax - height[left];
//     } else {
//       right -= 1;
//       rightMax = Math.max(rightMax, height[right]);
//       res += rightMax - height[right]; //rightmax = 3 , height[right] = 3
//     }
//   }

//   return res;
// };

// const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// console.log(trap(height));

function trap(height) {
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let waterTrapped = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        waterTrapped += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        waterTrapped += rightMax - height[right];
      }
      right--;
    }
  }

  return waterTrapped;
}

// Example usage:
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height)); // Output: 6

// const height = [3, 1, 2, 4, 0, 1, 3, 2];

//step 1:

//  initialize two variables, leftMax and rightMax, to keep track of the maximum height of the bars on the left and right sides, respectively.

// step 2:

// We enter a loop that continues until the left and right pointers meet.

// If the height of the bar at the left index is less than the height of the bar at the right index, we move the left pointer to the right.

// Otherwise, we move the right pointer to the left.

// step 3:

// If the height of the bar at the left index is greater than or equal to the current leftMax, we update leftMax to be the new height.

// Otherwise, we calculate the amount of water that can be trapped between the current bar and the leftMax bar, and add it to waterTrapped.

// We do the same for the right index.

// **height[left], +1 kore egiye jabe kintu leftmax left er shob theke boro ta thakbe r height[left] ke minus korbe
