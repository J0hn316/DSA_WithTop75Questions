// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

function productExceptSelf(nums) {
  let length = nums.length;
  if (length === 0) return [];

  let leftProduct = new Array(length).fill(1);
  let rightProduct = new Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    leftProduct[i] = leftProduct[i - 1] * nums[i - 1];
  }

  for (let j = length - 2; j >= 0; j--) {
    rightProduct[j] = rightProduct[j + 1] * nums[j + 1];
  }

  let output = [];
  for (let k = 0; k < length; k++) {
    output.push(leftProduct[k] * rightProduct[k]);
  }

  return output;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
// This algorithm is O (n), as it only iterates through the array once to calculate both the left and right products

// ChatGPT answer

function productExceptSelf1(nums) {
  // Calculate the prefix products
  const prefixProducts = [];
  let prefixProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    prefixProducts[i] = prefixProduct;
    prefixProduct *= nums[i];
  }

  // Calculate the suffix products and multiply them with the prefix products
  let suffixProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    prefixProducts[i] *= suffixProduct;
    suffixProduct *= nums[i];
  }
  return prefixProducts;
}

console.log(productExceptSelf1([1, 2, 3, 4])); // [24,12,8,6]
// this algorithm is O (n), where n is the number of elements in the input array
