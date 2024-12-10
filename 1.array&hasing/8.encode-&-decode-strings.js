// const encode = (strs) => {
//   return strs.map((str) => `${str.length}#${str}`).join('');
// };

// const strs = ['lint', 'code', 'love', 'you'];

// console.log(encode(strs));

// solution 2

class Codec {
  encode(strs) {
    let res = '';
    for (let s of strs) {
      res += s.length + '#' + s;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== '#') {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1; // Move i to the position after # (j + 1). Extract the next substring of length characters starting at i and add it to the result array.
      j = i + length;
      res.push(str.substring(i, j));
      i = j; // Move i forward to continue decoding the next string.
    }
    return res;
  }
}

// Example Usage:
const codec = new Codec();
const encoded = codec.encode(['neet', 'code', 'love', 'you']);
console.log(encoded); // Encoded string: "4#neet4#code4#love3#you"
const decoded = codec.decode(encoded);
console.log(decoded); // Output: ["neet", "code", "love", "you"]
