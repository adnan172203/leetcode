const checkInclusion = function (s1, s2) {
  // If s1 is larger than s2 then match is not possible
  // i.e (s1 cannot be substring of s2)
  if (s1.length > s2.length) return false;

  let neededChar = {}; //To Store the frequency/count of required string s1

  for (let i = 0; i < s1.length; i++) {
    // Initially neededChar[s1[i]] will be undefined and
    // undefined || 0 will return 0. So we increment it by 1
    neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
  }
  /* 
	Now we have neededChar
	i.e neededChar={
		a:1,
		b:1
	}
	*/
  let left = 0;
  let right = 0;
  let requiredLength = s1.length; //length of the substring required in s2

  // Now iterate until the right index of window is lesser than length of s2
  while (right < s2.length) {
    // If we found s2 character in s1 i.e in neededChar then we decrease requiredLength
    if (neededChar[s2[right]] > 0) requiredLength--;
    // Since we have encountered new char i.e s2[right] we decrease it's
    // count in neededChar even if it is not present in neededChar because we only care about neededChars
    neededChar[s2[right]]--;
    right++; //window is incremented by 1 step

    // Now if our requiredLength becomes 0 it means we have found a match of the s2 substring
    // So we return true
    if (requiredLength === 0) return true;

    // If our window length is equal to s1 length (length of string to search in s2)
    // then we have to remove left element of window i.e left++ and add new element from right
    // will be added in next iteration
    if (right - left === s1.length) {
      // if the left element we are removing was a required character then we increase requiredLength
      // because that element will no longer be the part of sliding window
      if (neededChar[s2[left]] >= 0) requiredLength++;
      // We will also increase the count of left element removed from window
      neededChar[s2[left]]++;
      // And finally we will decrease the window size by 1 from left i.e left++
      left++;
    }
  }
  // If match was not found we return false
  return false;
};

const s1 = 'ab';
const s2 = 'aeidbaooo';

console.log(checkInclusion(s1, s2));

// Suppose we have:

// s1: "ab"
// s2: "eidbaooo"
// The code snippet in question is responsible for maintaining a sliding window of size s1.length in s2.

// javascript
// Copy code
// if (right - left === s1.length) {
//     if (neededChar[s2[left]] >= 0) requiredLength++;
//     neededChar[s2[left]]++;
//     left++;
// }
// In this snippet:

// right represents the right pointer of the sliding window.
// left represents the left pointer of the sliding window.
// requiredLength tracks how many characters of s1 are still needed in the current window.
// Now, imagine we have moved our window to the point where s2[right] is "i" and s2[left] is "e". At this point, the window has reached the length of s1.

// right - left === s1.length checks if the length of the window is equal to the length of s1.
// If it is, we check neededChar[s2[left]] >= 0. This checks if the character at the left edge of the window (s2[left]) is actually present in s1 (meaning we need it). If it's not, it means this character is not relevant to our permutation, so we don't decrement requiredLength.
// If it is relevant, we increment requiredLength, because we're shifting our window, so we need to keep track of the new character (s2[left]) entering the window.
// We then increment the count of the character at s2[left] in neededChar because we're moving the window, so we need to account for the new character that has entered.
// Finally, we move the left pointer of the window (left++) to shift the window by one character to the right.
// This process continues until we reach the end of s2, checking and moving the window for each character.

// In our example, this would happen when s2[right] is at "o" and s2[left] is at "i". The window is now "idb" and is moved to "dba", "bao", and finally "aoo" before the loop completes.
