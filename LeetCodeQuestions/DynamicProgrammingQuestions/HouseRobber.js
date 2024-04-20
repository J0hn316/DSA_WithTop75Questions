// Given an integer array numbers representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

function rob(numbers) {
  if (numbers == null || numbers.length === 0) return 0;

  let n = numbers.length;
  let dp = new Array(n).fill(false);

  dp[0] = numbers[0];
  dp[1] = Math.max(numbers[0], numbers[1]);

  for (let i = 2; i < n; ++i) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + numbers[i]);
  }

  return dp[n - 1];
}

console.log(rob([1, 2, 3, 1])); // Output: 4

// ChatGPT answer

function robber(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[nums.length - 1];
}

console.log(robber([1, 2, 3, 1])); // Output:  4

// To solve this problem, we can use dynamic programming.
// We'll create an array dp of the same length as the numbers array to store the maximum amount of money that can be robbed up to the i-th house.
// We'll define dp[i] as the maximum amount of money that can be robbed up to the i-th house.
// The key insight here is that at each house i, we have two choices:
// 1.) Rob the i-th house: In this case, we add the current house's money (numbers[i])
// to the money robbed from the previous house that was not robbed (dp[i-2]).
// 2.) Skip the i-th house: In this case, the maximum money robbed up to the i-th house will
// be the same as the maximum money robbed up to the (i-1)-th house (dp[i-1]).
// We'll choose the maximum of these two choices to populate dp[i].

// Finally, the maximum amount of money that can be robbed without alerting the police will be the maximum value in the dp array.
// This solution has a time complexity of O(n) and a space complexity of O(n), where n is the length of the numbers array.
