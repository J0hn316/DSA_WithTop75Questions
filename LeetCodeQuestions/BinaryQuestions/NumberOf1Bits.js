// Write a function that takes the binary representation of a positive integer and returns the number of
// set bits it has (also known as the Hamming weight).

function hammingWeight(n) {
  let count = 0;

  while (n) {
    count += n & 1;
    n >>= 1;
  }

  return count;
}

console.log(hammingWeight(11)); // Output: 3

// ChatGPT answer

function hammingWeight1(binaryString) {
  let count = 0;

  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '1') {
      count++;
    }
  }
  return count;
}

const binaryString = '101010';

console.log(hammingWeight1(binaryString)); // Output:  3

// In this implementation:

// We initialize a variable count to store the count of set bits.
// We iterate through each character in the binary string.
// For each character, if it is '1', we increment the count.
// Finally, we return the count of set bits.
// This algorithm has a time complexity of O(n), where n is the length of the binary string.
// It's a straightforward approach to calculate the Hamming weight of a binary representation.
