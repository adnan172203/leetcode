const encode = (strs) => {
  return strs.map((str) => `${str.length}#${str}`).join('');
};

const strs = ['lint', 'code', 'love', 'you'];

console.log(encode(strs));
