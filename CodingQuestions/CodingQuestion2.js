// Create a function that merges two sorted arrays into one array.
// Example: [1, 3, 5] and [2, 4, 6] -> [1, 2, 3, 4, 5, 6].

function sortedArray(arr1, arr2) {
  let result = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1).concat(arr2);
}

console.log(sortedArray([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
