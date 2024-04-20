// Given an integer array numbers, find a subarray that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.

function maxProduct(numbers) {
  let n = numbers.length;
  if (n === 0) return 0;

  let maxp1 = numbers[0];
  let minp1 = numbers[0];
  let maxp2 = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < n; ++i) {
    let cur = numbers[i];

    if (cur > maxp1) {
      maxp2 = maxp1;
      maxp1 = cur;
    } else if (cur < maxp1) {
      maxp2 = cur;
    }

    if (cur < minp1) minp1 = cur;

    if (maxp2 < Math.abs(cur)) maxp2 = cur;
  }

  return Math.max(maxp1 * maxp2, maxp1);
}

console.log(maxProduct([2, 3, -2, 4])); // Output: 6

// ChatGPT answer

function maxProduct1(nums) {
  // Initialize variables to keep track of maximum and minimum product ending at each index
  let maxProductEnding = nums[0];
  let minProductEnding = nums[0];
  let maxSoFar = nums[0];
  // Loop through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // Store the current maximum product ending at this index
    const tempMax = maxProductEnding;

    // Update the maximum product ending at this index
    maxProductEnding = Math.max(
      nums[i],
      nums[i] * maxProductEnding,
      nums[i] * minProductEnding
    );

    // Update the minimum product ending at this index
    minProductEnding = Math.min(
      nums[i],
      nums[i] * tempMax,
      nums[i] * minProductEnding
    );

    // Update the maximum product seen so far
    maxSoFar = Math.max(maxSoFar, maxProductEnding);
  }
  return maxSoFar;
}
console.log(maxProduct1([2, 3, -2, 4])); // Output: 6
