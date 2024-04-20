// let counter = 0;
// function addItem() {
//   console.log(counter);
//    Base case
//   if (counter > 3) {
//     return 'done';
//   }
//   counter++;
//   return addItem();
// }

// console.log(addItem());

//1. Identify the base case
//2. Identify the recursive case
//3. Get closer and closer and return when needed. Usually 2 returns

// Write two functions that finds the factorial of any number.
// Factorial  means multiplying all positive integers less than or equal to a given number.
// For example, the factorial of 5 is written as 5 × 4 × 3 × 2 × 1= 120.
// One should use recursive, the other should just use a for loop.

// function findFactorialRecursive(number) {
//   // O(n)
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     return number * findFactorialRecursive(number - 1);
//   }
// }
// console.log(findFactorialRecursive(5));

// function findFactorialForLoop(num) {
//   // O(n)
//   let fact = 1;
//   for (let i = num; i >= 1; i--) {
//     fact *= i;
//   }
//   return fact;
// }
// console.log(findFactorialForLoop(5));

// function findFactorialIterative(number) {
//   // O(n)
//   let answer = 1;
//   if (number === 2) answer = 2;
//   for (let i = 2; i <= number; i++) {
//     answer = answer * i;
//   }
//   return answer;
// }

// console.log(findFactorialIterative(5));

// Given a number N return the index value of the Fibonacci sequence, where the sequence is: 0,1 ,1,2,3,5,8,13,21,34,55,89,144 ...
// The pattern of the sequence is that each value is the sum of the  previous two values, that means that for N=5 -> 2+3

// function fibonacciIterative(n) {
//   O(n) time complexity and O(1) space complexity
//   let arr = [0, 1];
//   for (let i = 2; i < n + 1; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }

//   return arr[n];
// }
// console.log(fibonacciIterative(8));

// function fibonacciRecursive(n) {
//   O(2^n) time complexity and O(n) space complexity
//   if (n < 2) return n;
//   return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
// }

// console.log(fibonacciRecursive(8));

// Using Recursion create a function that reverses a string

function reverseStringRecursively(str) {
  //  Base case: If the string is empty or has only one character, it's already reversed
  if (str.length <= 1) return str;
  // Recursive case: Take the last character of the string and add it to the beginning of the reversal of the rest of the string
  //const length = str.length;
  //if (length === 0 || length === 1) return str;
  else return reverseStringRecursively(str.slice(1)) + str.charAt(0);
}
console.log(reverseStringRecursively('hello'));
