const twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(nums[i], i);
  }
  return [];
};

console.log(twoSum([2, 4, 6, 7], 9));

// map.set(nums[i], i);  --  we are setting {value : index} e.g { 2 => 0 }

// [map.get(diff), i]; -- when we retrive like this, it will return the value index and current index e.g { 0, 3 }
