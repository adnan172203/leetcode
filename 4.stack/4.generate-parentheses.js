function generateParentheses(n) {
  const result = [];

  function backtrack(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }
    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  }

  backtrack('', 0, 0);
  return result;
}

// Example usage:
console.log(generateParentheses(3)); // Output: ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParentheses(1)); // Output: ["()"]

// https://www.youtube.com/watch?v=WW1rYrR3tTI
