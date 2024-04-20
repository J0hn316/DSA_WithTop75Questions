// Given an array of distinct integers numbers and a target integer target,
// return the number of possible combinations that add up to target.
// The test cases are generated so that the answer can fit in a 32-bit integer.

// ChatGPT answer

function combinationSum(numbers, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1; // There is 1 way to achieve a sum of 0

  for (let i = 1; i <= target; i++) {
    for (let num of numbers) {
      if (i >= num) dp[i] += dp[i - num];
    }
  }
  return dp[target];
}

console.log(combinationSum([1, 2, 3], 4)); // Output : 7

// To solve this problem, we can use dynamic programming.
// We'll create an array dp of size target + 1 where dp[i] represents the number of possible combinations to achieve the target sum i.
// We'll initialize dp[0] to 1 because there is one way to achieve a sum of 0, which is by not selecting any number.
// Then, for each number in the numbers array, and for each possible target sum from the current number up to the target,
// we'll update the dp array to reflect the number of combinations. Specifically, for each num in numbers, and for each i from num to target,
// we'll add dp[i - num] to dp[i] because selecting num can contribute to forming the sum i.

// Finally, we'll return dp[target], which represents the number of possible combinations to achieve the target sum.

// This solution has a time complexity of O(target * numbers.length) and a space complexity of O(target),
// where target is the target sum and numbers.length is the length of the numbers array.
