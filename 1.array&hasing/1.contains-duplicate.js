const containsDuplicate = (nums) => {
  const temp = {};
  for (const num of nums) {
    if (temp[nums[num]] !== undefined) {
      return true;
    } else {
      temp[nums[num]] = num;
    }
  }
  return false;
};

const nums = [1, 2, 4, 1];

console.log(containsDuplicate(nums));

/****
 * 
  If temp[nums[i]] is undefined, it means that the element nums[i] has not been seen before, and it adds this element as a key to the temp object. If temp[nums[i]] is not undefined, it implies that the element is already a key in the temp object, indicating a duplicate.
 *
 ****/

// solution 2

//   function containsDuplicate(nums) {
//     const numOccurrences = {};

//     for (const num of nums) {
//         if (numOccurrences[num]) {
//             // If the number already exists in the object, it's a duplicate
//             return true;
//         } else {
//             // Otherwise, mark the number as seen
//             numOccurrences[num] = true;
//         }
//     }

//     // If the loop completes without returning, there are no duplicates
//     return false;
// }
