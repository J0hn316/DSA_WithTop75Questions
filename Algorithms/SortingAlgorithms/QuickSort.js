// Quick sort algorithm
// Create a algorithm using quick sort to sort an array of numbers

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  let index;
  const pivot = array[right];

  index = left;
  for (let i = left; i < right; i++) {
    if (array[i] <= pivot) {
      const temp = array[index];
      array[index] = array[i];
      array[i] = temp;
      index++;
    }
  }

  const temp = array[index];
  array[index] = array[right];
  array[right] = temp;

  if (left < index - 1) {
    quickSort(array, left, index - 1);
  }
  if (index + 1 < right) {
    quickSort(array, index + 1, right);
  }
}
function partition(array, pivot, left, right) {
  let i = left;
  for (let j = left; j < right; j++) {
    if (array[j] <= pivot) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i++;
    }
  }
  return i;
}

function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

// select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log('The sorted array is: ', numbers);

// Another way

function quickSort1(array, left, right) {
  const len = array.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition1(array, pivot, left, right);

    //sort left and right
    quickSort1(array, left, partitionIndex - 1);
    quickSort1(array, partitionIndex + 1, right);
  }
  return array;
}

function partition1(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap1(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap1(array, right, partitionIndex);
  return partitionIndex;
}

function swap1(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort1(numbers, 0, numbers.length - 1);
console.log(numbers);
