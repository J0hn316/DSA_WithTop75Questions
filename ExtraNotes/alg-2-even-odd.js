function isEvenOrOdd(num) {
  const result = num % 2;
  if (result === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

function isEvenOrOdd1(num) {
  return num % 2 ? 'odd' : 'even';
}

console.log(isEvenOrOdd(10));
console.log(isEvenOrOdd(11));
