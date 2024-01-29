const productExceptSelf = (nums) => {
  const result = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));

// 1  1  2  6   - prefix

// 24 12 4  1   - postfix

//[24,12,8,6] - output
