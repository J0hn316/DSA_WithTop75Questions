const age = [30, 29, 54];

age.push(60); // Constant time complexity: 0(1)

age.unshift(10); // Linear Time complexity: 0(n)

const myAge = age[1]; // Constant time complexity: 0(1)

// ---

const namePopularity = [
  { userName: 'John', usages: 10 },
  { userName: 'Joe', usages: 5 },
];

const joeUsages = namePopularity.find((user) => user.userName === 'Joe').usages;
// Best case: Constant time complexity: O(1)
// Worst case: Linear time complexity => 0(n)
// Average case: Linear time complexity => 0(n)

const nameMap = { joe: 5, john: 10 };

const johnUsages = nameMap['john']; // Constant time complexity: 0(1)
