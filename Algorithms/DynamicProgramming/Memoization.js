// Memoization is a form of caching used in computer programming.
//It helps to store the results of expensive function calls and return the cached,
// result when the same inputs occur again, instead of re-executing an expensive function.

let cache = {};
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    cache[n] = n + 80;
    return cache[n];
  }
}
console.log(memoizedAddTo80(5)); // Output:  85
console.log(memoizedAddTo80(10)); // Output:  90
console.log(memoizedAddTo80(10)); // Output: 90

function memoized1AddTo80() {
  let cache = {};
  // Using closure technique to create private cache variable for each call
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoized1AddTo80();
console.log(memoized(2)); // Output:  82
console.log(memoized(4)); // Output:  86
