// Given an integer array numbers, return the length of the longest strictly increasing subsequence.

function lengthOfLIS(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let dp = new Array(numbers.length).fill(1);
  let maxLength = 1;

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    maxLength = Math.max(maxLength, dp[i]);
  }

  return maxLength;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output:  4

// ChatGPT answer

function lengthOfLIS1(numbers) {
  if (numbers.length === 0) return 0;

  // Initialize dp array with all elements as 1
  let dp = new Array(numbers.length).fill(1);

  // Iterate through the numbers array
  for (let i = 1; i < numbers.length; i++) {
    // Iterate through previous indices to find increasing subsequence
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  // Find the maximum value in dp array
  return Math.max(...dp);
}

console.log(lengthOfLIS1([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4

// To solve this problem, we can use dynamic programming. We'll create an array called dp of the same length as the input numbers.
// Each element dp[i] will represent the length of the longest increasing subsequence ending at index i.
// We'll initialize all elements of dp to 1 because the minimum length of any subsequence is 1 (the element itself).

// Then, for each index i, we'll iterate through all previous indices j (0 to i - 1).
// If numbers[i] is greater than numbers[j], it means we can extend the subsequence ending at index j by including numbers[i],
// thereby increasing its length by 1. We'll update dp[i] to the maximum of its current value and dp[j] + 1.

// Finally, we'll return the maximum value in the dp array, which represents the length of the longest increasing subsequence.

// This solution has a time complexity of O(n^2) and a space complexity of O(n), where n is the length of the input numbers array.
