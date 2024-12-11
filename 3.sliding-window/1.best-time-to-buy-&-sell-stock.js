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

// prices[right] - current sell price
// prices[left] - current buy price

// Inside the loop, we check if the current sell price (prices[right]) is higher than the current buy price (prices[left]).

// else {
//   left = right;
// }

// If the current sell price is not higher than the buy price, we update the buy price to the current sell price (left = right). This is because we want to find the lowest price to buy the stock before selling it at a higher price.
