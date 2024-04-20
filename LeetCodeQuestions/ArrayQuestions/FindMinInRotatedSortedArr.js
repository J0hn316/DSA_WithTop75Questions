// Suppose an array of length n sorted in ascending order is rotated between 1 and n times
// Example arr = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.

// Given the sorted rotated array numbers of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.

function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0

// ChatGPT answer

function findMin1(nums) {
  let left = 0;
  let right = nums.length - 1;

  // If the array is not rotated or has only one element, return the first element
  if (nums[left] < nums[right]) {
    return nums[left];
  }
  // Binary search to find the minimum element
  while (left < right) {
    const mid = Math.floor((left + right) / 2) + left;

    // Check if the mid element is greater than the element on its right
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];

    // Check if the mid element is less than the element on its left
    if (nums[mid] < nums[mid - 1]) return nums[mid];

    // Decide which half to search based on the value of the mid element
    if (nums[mid] > nums[left]) {
      // If mid element is greater than left element, search the right half
      left = mid + 1;
    } else {
      // Otherwise, search the left half
      right = mid - 1;
    }
  }
  // If no rotation is found, return the element at left
  return nums[left];
}

console.log(findMin1([3, 4, 5, 1, 2])); // Output: 1
