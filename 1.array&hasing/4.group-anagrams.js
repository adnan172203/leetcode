const groupAnagrams = (strs) => {
  const map = new Map();

  for (let str of strs) {
    // Sort the characters in the string alphabetically
    const sortedStr = str.split('').sort().join('');
    // Check if the sorted string exists as a key in the map
    if (map.has(sortedStr)) {
      // If it exists, add the current string to its corresponding array
      map.get(sortedStr).push(str);
    } else {
      // If it doesn't exist, create a new array with the current string
      map.set(sortedStr, [str]);
    }
  }

  // Convert the map values into an array and return the result
  return Array.from(map.values());
};

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(strs));
