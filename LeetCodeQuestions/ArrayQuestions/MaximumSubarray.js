//  Given an integer array numbers, find the subarray with the largest sum, and return its sum.

function maxSubArray(numbers) {
  let currentSum = numbers[0];
  let globalMax = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (currentSum < 0) {
      currentSum = numbers[i];
    } else {
      currentSum += numbers[i];
    }
  }

  return Math.max(globalMax, currentSum);
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 (-2 + 1 - 3 + 4 = 6)

// ChatGPT answer

function maxSubArraySum(numbers) {
  // Initialize variables to keep track of maximum sum and current sum
  let maxSum = numbers[0];
  let currentSum = numbers[0];

  // Loop through the array starting from the second element
  for (let i = 1; i < numbers.length; i++) {
    // Update the current sum by either adding the current number or starting a new subarray
    currentSum = Math.max(numbers[i], currentSum + numbers[i]);
    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
