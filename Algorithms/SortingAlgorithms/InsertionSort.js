// The Insertion Sort Algorithm
// Create a algorithm using Insertion Sort to sort an array of numbers

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 100];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentValue;
  }
}

// insertionSort(numbers);
// console.log(numbers);

function insertionSort1(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}
insertionSort1(numbers);
console.log('Insertion Sort Improved: ', numbers);
