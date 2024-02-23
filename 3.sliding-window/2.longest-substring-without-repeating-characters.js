const lengthOfLongestSubstring = (s) => {
  const charSet = new Set();
  let left = 0;
  let res = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left += 1;
    }
    charSet.add(s[right]);
    res = Math.max(res, right - left + 1); // mone kori a,b,c .. left 0 ache "a" er upore and right ache "c" er upore, length ber korte hole sathe +1 korte hobe nahole result hobe 2 kintu abc 3 ta character sehetu +1 korte hobe
  }
  return res;
};

const s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s));
