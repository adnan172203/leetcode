const isAnagram = (s, t) => {
  let firstWord = s
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
  let secondWord = t
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');

  if (firstWord === secondWord) {
    return true;
  }
  return false;
};

// solution two

// function isAnagram(s, t) {
//   // Step 1: Check if the lengths of the two strings are different
//   if (s.length !== t.length) {
//       // If the lengths are different, they can't be anagrams
//       return false;
//   }

//   // Step 2: Create frequency counters for each string
//   const charCountS = {};
//   const charCountT = {};

//   // Step 3: Update the frequency counters for string s
//   for (const char of s) {
//       // If the character is already in the counter, increment its count; otherwise, set its count to 1
//       charCountS[char] = (charCountS[char] || 0) + 1;
//   }

//   // Step 4: Update the frequency counters for string t
//   for (const char of t) {
//       // If the character is already in the counter, increment its count; otherwise, set its count to 1
//       charCountT[char] = (charCountT[char] || 0) + 1;
//   }

//   // Step 5: Compare the frequency counters
//   for (const char in charCountS) {
//       // If the counts of any character are different between the two strings, they are not anagrams
//       if (charCountS[char] !== charCountT[char]) {
//           return false;
//       }
//   }

//   // Step 6: If all checks pass, the strings are anagrams
//   return true;
// }

// // Example usage:
// console.log(isAnagram("anagram", "nagaram")); // Output: true
// console.log(isAnagram("rat", "car")); // Output: false
