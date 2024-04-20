// The Merge Sort Algorithm
// Create a algorithm using merge sort to sort an array of numbers

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 16];

function mergeSort(array) {
  if (array.length === 1) return array;
  // split Array into right and left
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let l = 0;
  let r = 0;

  while (l < left.length && r < right.length) {
    const isLessThan = left[l] <= right[r];
    result.push(isLessThan ? left[l++] : right[r++]);

    if (!isLessThan) {
      result.push(left[l + 1]);
      l++;
    }
  }

  return result.concat(left.slice(l)).concat(right.slice(r));
}
// console.log('Original: ', numbers);
// console.log('Sorted: ', mergeSort(numbers));

function mergeSort1(array) {
  if (array.length === 1) {
    return array;
  }

  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  //console.log('Left:', left);
  //console.log('Right:', right);

  return merge1(mergeSort1(left), mergeSort1(right));
}

function merge1(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  //console.log(left, right);
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
console.log('Merge Sort Recursive: ', mergeSort1(numbers));
