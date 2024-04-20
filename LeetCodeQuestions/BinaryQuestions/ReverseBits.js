//  Reverse bits of a given 32 bits unsigned integer.

function reverseBits(n) {
  let reversed = 0;

  for (let i = 0; i < 32; i++) {
    reversed |= (n & 1) << (31 - i);
    n >>= 1;
  }

  return reversed;
}

const n = 0b00000010100101000001111010011100;

console.log(reverseBits(n));
// Expected output: 964179295

// ChatGPT answer

function reverseBits1(n) {
  let reversed = 0;

  for (let i = 0; i < 32; i++) {
    reversed = (reversed << 1) | (n & 1); // Shift left and add the least significant bit of n
    n >>= 1; // Shift right to get the next bit of n
  }
  return reversed >>> 0; // Convert to unsigned 32-bit integer
}

console.log(reverseBits1(n)); // Outputs 964179295

// In this implementation:

// We initialize a variable reversed to store the reversed integer.
// We iterate 32 times (since it's a 32-bit integer) and perform the following steps:
// Shift reversed left by 1 bit (reversed << 1) to make space for the next bit.
// Get the least significant bit of n by performing a bitwise AND operation with 1 (n & 1).
// Append the obtained bit to reversed by performing a bitwise OR operation (reversed | (n & 1)).
// Shift n right by 1 bit to get the next bit for the next iteration (n >>= 1).
// Finally, we return the reversed integer.
// This algorithm reverses the bits of the given 32-bit unsigned integer.
// The >>> 0 operation is used to ensure that the result is treated as an unsigned 32-bit integer in JavaScript.
