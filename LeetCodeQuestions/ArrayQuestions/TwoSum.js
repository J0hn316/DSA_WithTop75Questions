// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(numbers, target) {
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(numbers[i], i);
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0,1]

// The time complexity  of this solution is O(n),
// as we are using a hash table to store the elements and their indices which takes constant time to look up an
// where n is the length of the input array  'numbers'.
// Explanation: The two numbers that add up to 9 are 2 and  7. Therefore index 0 and index  1 store the pair.
