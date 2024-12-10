// const isAnagram = (s, t) => {
//   let firstWord = s
//     .split('')
//     .sort((a, b) => a.localeCompare(b))
//     .join('');
//   let secondWord = t
//     .split('')
//     .sort((a, b) => a.localeCompare(b))
//     .join('');

//   if (firstWord === secondWord) {
//     return true;
//   }
// };

// solution two

function isAnagram(s, t) {
  // Step 1: Check if the lengths of the two strings are different
  if (s.length !== t.length) {
    // If the lengths are different, they can't be anagrams
    return false;
  }

  // Step 2: Create frequency counters for each string
  const charCountS = {};
  const charCountT = {};

  // Step 3: Update the frequency counters for string s
  for (const char of s) {
    // If the character is already in the counter, increment its count; otherwise, set its count to 1
    charCountS[char] = (charCountS[char] || 0) + 1;
  }

  // Step 4: Update the frequency counters for string t
  for (const char of t) {
    // If the character is already in the counter, increment its count; otherwise, set its count to 1
    charCountT[char] = (charCountT[char] || 0) + 1;
  }

  // Step 5: Compare the frequency counters
  for (const char in charCountS) {
    // If the counts of any character are different between the two strings, they are not anagrams
    if (charCountS[char] !== charCountT[char]) {
      return false;
    }
  }

  // Step 6: If all checks pass, the strings are anagrams
  return true;
}

// Example usage:
console.log(isAnagram('anagram', 'nagaram')); // Output: true
console.log(isAnagram('rat', 'car')); // Output: false

// Suppose we're processing the string s = "anagram".

// When we encounter the first character 'a':

// charCountS['a'] is undefined since we haven't encountered 'a' before.
// So, (charCountS['a'] || 0) evaluates to 0 because undefined || 0 results in 0.
// Therefore, charCountS['b'] = 0 + 1 sets the count of 'b' to 1.

//===============================//

// When we use the || operator in JavaScript, it works like this:

// If the first value (left side of ||) is truthy, it returns that value.
// If the first value is falsy (like undefined, null, 0, false, or an empty string ''), it returns the second value (right side of ||).
// So, in the expressions:

// undefined || 0:

// Since undefined is falsy, JavaScript moves to the next value, which is 0.
// So, the result is 0.
// 1 || 0:

// 1 is truthy, so JavaScript doesn't need to evaluate the second value because it already has a truthy value (1).
// So, the result is 1.

// solution three

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false; // If lengths differ, they cannot be anagrams
//   }

//   const count = {};

//   // Count the frequency of each character in s
//   for (let char of s) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   // Subtract the frequency based on characters in t
//   for (let char of t) {
//     if (!count[char]) {
//       return false; // If a character is not found or count goes negative
//     }
//     count[char] -= 1;
//   }

//   return true; // All counts matched
// }

// // Example Usage:
// console.log(isAnagram('anagram', 'nagaram')); // Output: true
// console.log(isAnagram('rat', 'car')); // Output: false
