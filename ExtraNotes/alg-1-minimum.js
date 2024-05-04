function getMin(num) {
  if (num.length === 0) {
    throw new Error('Should not be an empty array');
  }

  let currentMinimum = num[0];

  for (let i = 1; i < num.length; i++) {
    if (num[i] < currentMinimum) {
      currentMinimum = num[i];
    }
  }

  return currentMinimum;
}

// const testNums = [8, 50, 10];

// const min = getMin(testNums);

// console.log(min);

function getMin2(num) {
  if (num.length === 0) {
    throw new Error('Should not be an empty array');
  }

  for (let i = 0; i < num.length; i++) {
    let outerEl = num[i];
    for (let j = i + 1; j < num.length; j++) {
      let innerEl = num[j];

      if (outerEl > innerEl) {
        //swap the elements
        num[i] = innerEl;
        num[j] = outerEl;

        outerEl = num[i];
        innerEl = num[j];
      }
    }
  }
  return num[0];
}

const testNums = [8, 50, 10];

const min = getMin2(testNums);

console.log(min);
