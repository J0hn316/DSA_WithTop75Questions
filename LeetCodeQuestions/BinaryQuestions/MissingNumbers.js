//Given an array numbers containing n distinct numbers in the range [0, n],
//return the only number in the range that is missing from the array.

function missingNumber(number) {
  let total = 0;
  for (let i = 0; i < number.length; i++) {
    total += number[i];
  }
  return (number.length * (number.length + 1)) / 2 - total;
}
console.log(missingNumber([3, 0, 1])); // Output:  2

// ChatGPT answer

function missingNumber1(number) {
  const n = number.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = number.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

console.log(missingNumber1([3, 0, 1])); // Output: 2

// In this implementation:

// We first calculate the expected sum of the first n natural numbers using the formula n * (n + 1) / 2.
// Then, we calculate the actual sum of the numbers in the array using the reduce method.
// Finally, we return the difference between the expected sum and the actual sum, which gives us the missing number.
// This algorithm has a time complexity of O(n) due to the reduce method used to calculate the sum of the numbers in the array.
// However, it's an optimal solution for finding the missing number in a range.
