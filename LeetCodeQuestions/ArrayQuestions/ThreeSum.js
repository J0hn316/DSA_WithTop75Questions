//  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
//  such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

function threeSum(nums) {
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    twoSum(nums.slice(i + 1), -nums[i]);
  }

  function twoSum(arr, target) {
    arr.sort((a, b) => a - b);
    const len = arr.length;
    for (let j = 0; j < len - 1; j++) {
      let l = j + 1,
        r = len - 1;
      while (l < r) {
        if (arr[l] + arr[r] == target) {
          result.push([nums[i], nums[j], arr[l], arr[r]]);
          l++;
          r--;
        } else if (arr[l] + arr[r] < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Output:   [[-1, -1, 2], [-1, 0, 1]]

// ChatGPT answer

function threeSum1(nums) {
  const triplets = [];

  // Sort the array tp use two-pointer technique
  nums.sort((a, b) => a - b);

  // Iterate through the array with a fixed first element (nums[i])
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates to avoid duplicate results
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    // Use two pointers to find the other two elements
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        // Found a triplet with sum equal to zero
        triplets.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move pointers to find other solutions
        left++;
        right--;
      } else if (sum < 0) {
        // If sum is less than zero, move left pointer to increase sum
        left++;
      } else {
        // If sum is greater than zero, move right pointer to decrease sum
        right--;
      }
    }
  }
  return triplets;
}

console.log(threeSum1([-1, 0, 1, 2, -1, -4]));
// Output: [[-1, -1, 2], [-1, 0,  1]]
