// Create a function that reverses a string
// Example: Hello my name is Jack should be:
// kcaJ eman ym olleH

function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(reverse('Hello my name is Jack'));
// Output: "kcaJ eman ym olleH"

function reverse1(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Invalid Input';
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

const reverse3 = (str) => str.split('').reverse().join('');
reverse3('Hello world!'); // Output:"!dlrowolleH"

const reverse4 = (str) => [...str].reverse().join('');
reverse4('Hello World'); //  Output: "dlroW olleH"
