// Given an integer array numbers, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:
// Input: [1,2,3,1]
// Output: true

// Example 2:
// Input: [4,1,2,1,2]
// Output: true

function hasDuplicate(numbers) {
  let map = new Map();

  for (let num of numbers) {
    if (map.has(num)) {
      return true;
    } else {
      map.set(num, true);
    }
  }

  return false;
}
console.log(hasDuplicate([1, 2, 3, 1])); // true

function hasDuplicate1(numbers) {
  const newSet = new Set(numbers);
  return newSet.size !== numbers.length;
}

console.log(hasDuplicate1([4, 1, 2, 1, 2])); // true
