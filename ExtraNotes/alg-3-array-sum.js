function sumUp(num) {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

const array = [1, 2, 3];
console.log(sumUp(array)); // Output: 6
