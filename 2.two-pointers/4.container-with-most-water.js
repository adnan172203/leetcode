function maxArea(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);

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
