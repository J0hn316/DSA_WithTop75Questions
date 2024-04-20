// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      maxWater = Math.max(maxWater, height[left]);
      left++;
    } else {
      maxWater = Math.max(maxWater, height[right] - height[left]);
      right--;
    }
  }

  return maxWater;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); //  6

// ChatGPT answer

function maxArea1(height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // Calculate the width of the container
    const width = right - left;

    // Calculate the height of the container (minimum height of the two lines)
    const minHeight = Math.min(height[left], height[right]);

    // Calculate the area of the container
    const area = width * minHeight;

    // Update maxWater if the current area is greater
    maxWater = Math.max(maxWater, area);

    // Move the pointer with the shorter line towards the other pointer
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}
// This algorithm runs in O(n) time complexity, where n is the length of the height array.

console.log(maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// Output : 49
