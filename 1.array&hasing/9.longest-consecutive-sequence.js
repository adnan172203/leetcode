function longestConsecutive(nums) {
  const number = new Set(nums);
  let longest = 0;

  for (const n of nums) {
    if (!number.has(n - 1)) {
      let length = 0;
      while (number.has(n + length)) {
        length += 1;
      }
      longest = Math.max(length, longest);
    }
  }

  return longest;
}

// // const nums = [100, 4, 200, 201, 202, 203, 3, 5];
const nums = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutive(nums));

// (!number.has(n - 1)) this line help to find starting point, if there is any smaller number than the current "n" then this is not the starting point, e.g. if (100-1)= 99 is available then it won't go ahead for loop, starts again and go next number. when find the smallest number then it's try to find the longest sequence
