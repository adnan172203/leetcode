const minWindow = function (s, t) {
  if (t.length > s.length) return '';

  const neededChars = {};

  for (let char of t) {
    neededChars[char] = (neededChars[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let neededLength = Object.keys(neededChars).length;
  let substring = '';

  while (right < s.length) {
    const rightChar = s[right];

    neededChars[rightChar]--;
    if (neededChars[rightChar] === 0) neededLength--;

    // neededLength === 0 means we get all the "t" characters in current window.
    // this while loop ensure that the algorithm doesn't prematurely exit the valid window state. It continues exploring to find potentially smaller windows until the entire string s is traversed.
    while (neededLength === 0) {
      if (!substring || substring.length > right - left + 1) {
        substring = s.slice(left, right + 1);
      }

      const leftChar = s[left];
      // If the leftChar in charMap is at exactly 0 before being
      // incremented, we now need more leftChars so that its count
      // in charMap goes down to exactly 0
      if (neededChars[leftChar] === 0) {
        neededLength++;
      }
      neededChars[leftChar]++;
      left++;
    }

    right++;
  }

  return substring;
};

const s = 'ADOBECODEBANC';
const t = 'ABC';

console.log(minWindow(s, t));

// video: https://www.youtube.com/watch?v=nMaKzLWceFg

// while (neededLength === 0) -- we run this while loop when find all the "t" characters in current sliding window. this loop will ensure that, we will go through the end of the "s". otherwise we may not the find "minimum window".

// e.g = if we only iterate one time we get this "ADOBEC" as a result but the minimum window is "BANC".
