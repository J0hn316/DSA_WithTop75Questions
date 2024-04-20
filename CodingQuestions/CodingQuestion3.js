// Hash Table question
// Create a function the return the first recurring number in an array if not return undefined
// Examples:
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2
// Given an array = [2,1,1,2,3,5,1,2,4]
//  It should return 1
// Given an array = [2,3,4,5]
// It should return undefined

function findRecurring(arr) {
  let hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hashTable[arr[i]]) {
      hashTable[arr[i]] = true;
    } else {
      return arr[i];
    }
  }
  return undefined;
}
console.log(findRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(findRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(findRecurring([2, 3, 4, 5]));

function findRecurring1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
} 
// O(n^2) solution is also acceptable but it's not efficient as above one. O(1) Space complexity  
