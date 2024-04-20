// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

function coinChange(coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin > i) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11)); // Output:  3

// ChatGPT answer

function coinChange1(coins, amount) {
  // Initialize dp array with Infinity values
  const dp = new Array(amount + 1).fill(Infinity);
  // It takes 0 coins to make up an amount of 0
  dp[0] = 0;

  // Iterate through each coin denomination
  for (const coin of coins) {
    // Update dp values for each amount from coin to amount
    for (let i = coin; i <= amount; i++) {
      // Update dp[i] with minimum of current value or dp[i - coin] + 1
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  // Return the result, -1 if amount cannot be made up
  return dp[amount] !== Infinity ? dp[amount] : -1;
}

console.log(coinChange1([1, 2, 5], 11)); // Output:  3

// This function coinChange takes in an array of coin denominations coins and the total amount amount,
// and returns the fewest number of coins needed to make up that amount.
// If it's not possible to make up the amount with the given coins, it returns -1.
// This solution has a time complexity of O(amount * coins.length) and a space complexity of O(amount),
// where amount is the target amount and coins.length is the number of coins given.
