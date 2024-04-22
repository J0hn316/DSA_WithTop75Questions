// Level: Medium
// Given an unsorted array of integers numbers, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

const longestConsecutive = (numbers) => {
  if (!numbers || numbers.length === 0) return 0;

  const numSet = new Set(numbers);
  let maxLength = 0;

  // Iterate through each number in the array
  for (const num of numSet) {
    // Check if the current number is the start of a consecutive sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      // Increment the current number and count the length of the consecutive sequence
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }
      // Update the maximum length found so far
      maxLength = Math.max(maxLength, currentLength);
    }
  }
  return maxLength;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // output: 4

// We first create a set numSet containing all the numbers in the array.
// Then, we iterate through each number in the set.
// For each number, if it's the start of a consecutive sequence (i.e., it doesn't have a predecessor in the set),
// we count the length of the consecutive sequence by incrementing the current number until it's not in the set.
// We update the maximum length found so far as we encounter longer consecutive sequences.
// Finally, we return the maximum length found.
