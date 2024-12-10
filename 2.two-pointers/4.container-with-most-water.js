function maxArea(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const currHeight = Math.min(height[left], height[right]);
    const area = width * currHeight;

    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return max;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));

// ** biger width with bigger height find out the max area.

// video: https://www.youtube.com/watch?v=w7ftYsZtIbs

// right - left gives the width of the container. right- left kora hoise karon while loop e left < right ei jonno right- left korle positive number ashbe

// height = Math.min(height[left], height[right]) kora hoise karon container er height ber korte hobe, jar moddhe choto ta hobe sei height

//
//
//

// why use math.min?

// The Math.min function is used to find the height of the container because the height is limited by the shorter line segment between the left and right pointers.

// For example, if the height array was:

// [1, 8, 6, 2, 5, 4, 8, 3, 7]

// And left pointer was at index 0 with height 1, and right pointer was at index 1 with height 8.

// The width would be right - left = 1 - 0 = 1

// The height is limited by the shorter line segment, which is height[left] = 1.

// So Math.min(height[left], height[right]) returns 1, which is the shorter height that limits how much water this container can hold.

// If we didn't use Math.min, and just used height[left], then the height would be 8 and we would calculate a larger area than is possible for that container configuration.

// So Math.min allows us to correctly calculate the area of each container by using the height limited by the shorter side. This ensures we don't overestimate the area for that container.

// ***************** min water line height **************

// The reason we need to find the minimum height between the two lines at the left and right pointers is because the amount of water that can be trapped between two lines is limited by the shorter of the two lines.

// Here's why:

// Imagine you're trying to fill the space between two vertical lines with water. The water level can't rise higher than the shorter line, because water will overflow from the shorter side.
// If one line is much taller than the other, the taller line won't matter as much because the shorter line will be the limiting factor.
// For example:

// If height[left] = 1 and height[right] = 8, the water can only rise to a height of 1 (because the left side is shorter).
// If height[left] = 6 and height[right] = 3, the water can only rise to a height of 3 (because the right side is shorter).
