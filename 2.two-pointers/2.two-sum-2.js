let twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement) + 1, i + 1];
    }

    map.set(nums[i], i);
  }
  return [];
};

const numbers = [2, 7, 11, 15];

console.log(twoSum(numbers, 9));

// function twoSum(numbers, target) {
//   let L = 0;
//   let R = numbers.length - 1;

//   while (numbers[L] + numbers[R] !== target) {
//     if (numbers[L] + numbers[R] > target) {
//       R = R - 1;
//     } else if (numbers[L] + numbers[R] < target) {
//       L = L + 1;
//     }
//   }

//   return [L + 1, R + 1];
// }
