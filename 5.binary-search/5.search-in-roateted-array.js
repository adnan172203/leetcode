function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Determine which part is sorted

    // Check if the left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // Target is in the left part
      } else {
        left = mid + 1; // Target is in the right part
      }
    }
    // Otherwise, the right half must be sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // Target is in the right part
      } else {
        right = mid - 1; // Target is in the left part
      }
    }
  }
  return -1; // Target not found
}

// Example usage:
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
console.log(search([1], 0)); // Output: -1
