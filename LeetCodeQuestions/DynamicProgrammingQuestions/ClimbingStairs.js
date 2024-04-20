// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n) {
  if (n <= 2) return n;
}

console.log(climbStairs(2)); // Output : 2

// ChatGPT answer

function climbStairs1(n) {
  if (n === 1) return 1; // Only one way to climb when there is only one step.

  // Initialize an array to store the number of distinct ways for each step.
  const dp = new Array(n + 1);

  // Base cases
  dp[1] = 1; // Only one way to climb one step
  dp[2] = 2; // Two ways to climb two steps: (1, 1) or (2)

  // Calculate the number of distinct ways for each step starting from step 3
  for (let i = 3; i <= n; i++) {
    // The number of distinct ways to reach step i is the sum of distinct ways to reach steps (i-1) and (i-2)
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(climbStairs1(2)); // output: 2

// In this implementation:

// We handle base cases where there is only one step or two steps.
// We initialize an array dp to store the number of distinct ways for each step.
// We use a loop to calculate the number of distinct ways for each step starting from step 3 up to the target step n.
// For each step i, the number of distinct ways to reach it is the sum of the number of distinct ways to reach steps (i-1) and (i-2).
// Finally, we return the number of distinct ways to reach the top step n.
// This algorithm has a time complexity of O(n) because it iterates through n steps once to calculate the number of distinct ways for each step.
