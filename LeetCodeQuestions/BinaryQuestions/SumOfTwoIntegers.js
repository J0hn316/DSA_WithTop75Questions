// Given two integers a and b, return the sum of the two integers without using the operators + and -.

function getSum(a, b) {
  let carry = 0;
  while (b !== 0) {
    carry = a & b;
    a = (a ^ b) + carry;
    b = Math.floor(carry / 2);
  }
  return a;
}

console.log(getSum(1, 2)); // Output:  3

// ChatGPT answer

function getSum1(a, b) {
  while (b !== 0) {
    const carry = (a & b) << 1; // Calculate the carry by ANDing and left shifting
    a = a ^ b; // XOR to get the sum without carry
    b = carry; // Update b wih the carry
  }
  return a;
}

console.log(getSum1(1, 2)); // Output: 3

// In this implementation:

// We use a while loop to handle the case where there is a carry.
// Inside the loop, we calculate the carry using bitwise AND (a & b) and left shift (<< 1) operations.
// This gives us the bits that need to be carried over to the next position.
// We update a with the sum of a and b without considering the carry by using the bitwise XOR (a ^ b) operation.
// We update b with the carry calculated in the previous step.
// The loop continues until there is no carry left, at which point we return the final sum stored in a.
// This algorithm effectively calculates the sum of two integers without using the addition or subtraction operators.
