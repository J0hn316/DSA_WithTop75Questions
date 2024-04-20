// There is an integer array numbers sorted in ascending order (with distinct values).
// Given the array numbers after the possible rotation and an integer target,
// return the index of target if it is in numbers, or -1 if it is not in numbers.
// You must write an algorithm with O(log n) runtime complexity.

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output:  4

// ChatGPT answer

function search1(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if the mid element is the target
    if (nums[mid] === target) return mid;

    // Check if the left half is sorted
    if (nums[left] <= nums[mid]) {
      // Check if the target lies in the left half
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // Search in the left half
      } else {
        left = mid + 1; // Search in the right half
      }
    } else {
      // Check if the target lies in the right half
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }
  }
  // If target is not found, return -1
  return -1;
}
