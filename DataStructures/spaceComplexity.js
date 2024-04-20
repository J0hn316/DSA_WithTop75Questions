function something(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('something');
  }
}

something([1, 2, 3]);
// logs 'something' three times.
// Big O: O(n), where n is the length of the input array.
// Space Complexity: O(1).

function arrayOfIntTime(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = 'yo';
  }
  return arr;
}

arrayOfIntTime(5);
//  returns ['yo', 'yo', 'yo', 'yo', 'yo']
//   Big O: O(n), where n is the integer passed in as an argument.
//    Space Complexity: O(n), because we are creating a new array that has n elements
