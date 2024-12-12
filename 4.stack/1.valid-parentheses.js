const isValid = function (s) {
  const temp = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      temp.push(s[i]);
    } else if (map[temp.pop()] !== s[i]) {
      return false;
    }
  }

  if (temp.length > 0) return false;
  else return true;
};

console.log(isValid('(){}[]'));
