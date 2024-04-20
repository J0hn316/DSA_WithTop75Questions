//You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0

function maxProfit(prices) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected output: 5

function maxProfit1(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    const profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
}

console.log(maxProfit1([7, 1, 5, 3, 6, 4])); // OutPut  : 5
