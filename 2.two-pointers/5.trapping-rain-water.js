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

// height[left], +1 kore egiye jabe kintu leftmax left er shob theke boro ta thakbe r height[left] ke minus korbe
