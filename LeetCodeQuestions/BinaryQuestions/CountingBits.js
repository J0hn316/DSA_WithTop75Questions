// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
// ans[i] is the number of 1's in the binary representation of i.

function countBits(n) {
  let dp = new Array(n + 2).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i >> 1] + (i & 1);
  }

  return dp;
}

console.log(countBits(2)); // Output:  [0, 1, 1]

// ChatGPT answer

function countBits1(n) {
  const answer = [0];

  for (let i = 1; i <= n; i++) {
    answer[i] = answer[i >> 1] + (i & 1);
  }
  return answer;
}

// In this implementation:

// We initialize the ans array with the count of set bits for 0.
// Then, we iterate from 1 to n, and for each i, we calculate the count of set bits using the formula explained above and store it in the ans array.
// Finally, we return the ans array.
// This algorithm has a time complexity of O(n), where n is the input integer.
