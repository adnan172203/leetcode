const evalRPN = (tokens) => {
  const stack = [];

  tokens.forEach((token) => {
    if (token === '+') {
      stack.push(Number(stack.pop()) + Number(stack.pop()));
    } else if (token === '-') {
      const a = Number(stack.pop());
      const b = Number(stack.pop());

      stack.push(b - a);
    } else if (token === '/') {
      const a = Number(stack.pop());
      const b = Number(stack.pop());

      stack.push(Math.trunc(b / a));
    } else if (token === '*') {
      stack.push(Number(stack.pop()) * Number(stack.pop()));
    } else {
      stack.push(Number(token));
    }
  });

  return stack[0];
};

const tokens = ['2', '1', '+', '3', '*'];

console.log(evalRPN(tokens));

// https://www.youtube.com/watch?v=XAm4u7kmliI
