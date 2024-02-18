const isPalindrome = (str) => {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the cleaned string is equal to its reverse
  return cleanedString === cleanedString.split('').reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
