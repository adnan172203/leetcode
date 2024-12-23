function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let midIdx = Math.floor((left + right) / 2);

    if (nums[midIdx] > nums[right]) {
      left = midIdx + 1;
    } else {
      right = midIdx;
    }
  }

  return nums[left];
}
