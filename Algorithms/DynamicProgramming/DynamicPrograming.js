// Dynamic Programming is  a method of solving problems by breaking it down into smaller sub-problems
//and using the solutions to those sub-problems to construct a solution to the original problem.

let cal = 0;
function fibonacci(n) {
  // time complexity  O(2^n), space complexity O(1).
  //console.log(cal++);
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//console.log(fibonacci(9)); //34

function fibonacciMaster() {
  //time complexity O(N) space complexity O(N)
  let cache = {};
  return function fib(n) {
    cal++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fastFib = fibonacciMaster();
console.log(fastFib(9)); //34
console.log('It did ' + cal + 'calculations');

// bottom up approach: start from the base case and build our way up to the final result.
function fibonacciMaster1(n) {
  let answer = [0, 1];
  for (i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

console.log(fibonacciMaster1(9)); //34
