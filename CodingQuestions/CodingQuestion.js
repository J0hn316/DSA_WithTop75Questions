// Given 2 arrays, create a function that let's a user know whether these two arrays contain any common items
// Example:
// const array1 = ['a','b','c','x']
// const array2 = ['z','y','i']
// should return false
// -----
// const array1 = ['a','b','c','x']
// const array2 = ['z','y','x']
// should return true

function someCheck(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(someCheck(['a', 'b', 'c', 'x'], ['z', 'y', 'i'])); // false
console.log(someCheck(['a', 'b', 'c', 'x'], ['z', 'y', 'x'])); // true

// This is not the best solution because is O(a*b) time complexity and it doesn't use Set or other data structures to improve performance.
// Space Complexity in function above is O(1)

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'i'];

function containCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array.
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

containCommonItem2(array1, array2); // false
containCommonItem2(array3, array4); // true

// This solution using O(a+b)  time complexity because we are looping through both arrays once.
// And space complexity is also O(a),  because we only use one additional data structure to store the elements of the first array.

// Another way

function containCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
  // The some() method is used to determine whether an array includes a certain value among its entries, returning true or false as appropriate.
}

containCommonItem3(array1, array2); // false
containCommonItem3(array3, array4); // true
