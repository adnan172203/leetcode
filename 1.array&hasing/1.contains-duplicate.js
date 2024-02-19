function containsDuplicate(nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    else set.add(nums[i]);
  }

  return false;
}
console.log(containsDuplicate(nums));

/****
 * 
  If temp[nums[i]] is undefined, it means that the element nums[i] has not been seen before, and it adds this element as a key to the temp object. If temp[nums[i]] is not undefined, it implies that the element is already a key in the temp object, indicating a duplicate.
 *
 ****/

// solution 2

// const containsDuplicate = (nums) => {
//   const temp = {};
//   for (const num of nums) {
//     if (temp[nums[num]] !== undefined) {
//       return true;
//     } else {
//       temp[nums[num]] = num;
//     }
//   }
//   return false;
// };

// const nums = [1, 2, 4, 1];

// console.log(containsDuplicate(nums));
