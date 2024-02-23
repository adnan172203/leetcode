const maxProfit = (prices) => {
  let max = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      if (profit > max) {
        max = profit;
      }
    } else {
      left = right;
    }

    right++;
  }

  return max;
};

const prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
