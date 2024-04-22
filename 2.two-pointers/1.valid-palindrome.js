const isPalindrome = (str) => {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the cleaned string is equal to its reverse
  return cleanedString === cleanedString.split('').reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true

// var isPalindrome = function(s) {
//   let newStr = s.toLowerCase().replace(/[^0-9a-z]/g, "");
//   let left = 0, right = newStr.length-1;

//   while(left < right){
//       if(newStr[left] !== newStr[right]) return false
//       left++
//       right--
//   }
//   return true
// };
