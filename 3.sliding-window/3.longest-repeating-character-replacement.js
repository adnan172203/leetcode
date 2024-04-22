function characterReplacement(s, k) {
  let map = {}; // This map will store the frequency of characters in the current window

  let topFrequency = 0; // This variable will store the highest frequency of any character in the current window
  let longest = 0; // This variable will store the length of the longest valid substring

  let left = 0; // Left pointer of the window
  let right = 0; // Right pointer of the window

  // The main loop that moves the window through the string
  while (right < s.length) {
    let rightChar = s[right];

    // Update the frequency of the current character in the map
    map[rightChar] = map[rightChar] + 1 || 1;

    // Update the topFrequency to be the maximum frequency in the current window
    topFrequency = Math.max(topFrequency, map[rightChar]);

    // We are allowed to have at most k replacements in the window...
    // So, if max character frequency + distance between beginning and end is greater than k...
    // this means we have considered changing more than k charactres. So time to shrink window...
    // Then there are more characters in the window than we can replace, and we need to shrink the window...

    while (right - left + 1 - topFrequency > k) {
      let leftChar = s[left];
      map[leftChar]--;
      left++;
    }

    // Update the length of the longest valid substring
    longest = Math.max(longest, right - left + 1);

    // Move the right pointer to expand the window
    right++;
  }

  // Return the length of the longest valid substring
  return longest;
}
const s = 'ABBBBCC';
console.log(characterReplacement(s, 1));

// video: https://www.youtube.com/watch?v=yoEC3ZjYiko

// The variable right is the index of the right endpoint of the current window, and left is the index of the left endpoint of the current window. The expression right - left + 1 calculates the length of the current window.

// The variable topFrequency is the frequency count of the most frequent character in the current window. This value is updated whenever a new character is added to the map object (see the previous line of code).

// The expression (right - left + 1 - topFrequency) calculates the number of characters in the current window that are not the most frequent character. If this value is greater than k, it means that we need to adjust the window to include more occurrences of the most frequent character.

//sliding window te (right - left + 1 - topFrequency) etar result jodi "k" theke beshi hoy tahole window adjust korte hobe karon, mone kori "ABBBBC" , ekhane k = 1 kintu   (right - left + 1 - topFrequency) etar result jodi k theke beshi hoy tahole 2 ta change korte parbo na karon k er value 1. tokhon window ta left theke samne agabe notun window hobe "BBBBC" ebong  "C" ke B diye replace kora jabe karon k=1. result hobe 5.
