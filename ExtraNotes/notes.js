const color = ['blue'];
const allColors = ['red', 'green', 'yellow', 'black', 'gold']; //
const large = new Array(16).fill('blue');

function findColor(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'blue') {
      console.log('found blue');
    }
  }
}

findColor(large); // 0(n) Linear Time

const findColor2 = (array) => {
  array.forEach((color) => {
    if (color === 'blue') {
      console.log('Found Blue!');
    }
  });
};
const findColor3 = (array) => {
  for (let color of array) {
    if (color === 'blue') {
      console.log('Found Blue');
    }
  }
};

const boxes1 = [0, 1, 2, 3, 4, 5];

function logFirstBoxes(boxes) {
  console.log(boxes[0]); // O(1) Constant time
  console.log(boxes[1]); // O(1) Constant time
}

logFirstBoxes(boxes1); // O(2)

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunc(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// Big O (3 + 4n) turns into Big O(n)

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// Big O = 4 + 7n = O(n) turns into Big O(n)

// log all pairs of array

const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes);
// Big O : n^2 because we have two nested loops, each running from 0 to the length of the array.

function printNumAndAllSums(numbers) {
  console.log('these are the numbers');
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printNumAndAllSums([1, 2, 3]);
// Big O:(n^2)  n*m where m is the number of times the inner loop runs and n is how many times the outer loop runs. In this case, m
