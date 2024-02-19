const productExceptSelf = (nums) => {
  const result = [];
  let prefix = 1;
  let postfix = 1;

  // Calculate the product of elements before the current index
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Calculate the product of elements after the current index
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));

// 1, 2, 3, 4   - main array

// 1  1  2  6   - prefix

// 24 12 4  1   - postfix

//[24,12,8,6]   - output

// Prefix Products:

// The line responsible for calculating prefix products is:
//
// result[i] = prefix;

// Here, prefix represents the product of all elements before the current index i. This effectively excludes the element at index i because it's not included in the calculation of the prefix product. The value prefix is updated in the next line (prefix *= nums[i]), which includes the element at index i for the subsequent prefix products but excludes it from the current prefix product.

// Postfix Products:

// The line responsible for calculating postfix products is:
//
// result[i] *= postfix;

// Similar to prefix products, postfix represents the product of all elements after the current index i. The multiplication here effectively excludes the element at index i from contributing to the product because it's not included in the calculation of the postfix product.

// https://www.youtube.com/watch?v=G9zKmhybKBM
