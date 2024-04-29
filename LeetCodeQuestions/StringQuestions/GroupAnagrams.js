// Level Medium
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs) {
  let map = new Map();

  for (let i = 0; i < strs.length; i++) {
    let key = getKey(strs[i]);

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(strs[i]);
  }

  return Array.from(map.values());
}

function getKey(word) {
  return word.split('').sort().join('');
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
/* Output:
[['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]*/

function groupAnagrams1(strs) {
  // Hash map to store anagram groups
  const anagramGroups = {};

  // Iterate through each string in the input array
  for (let str of strs) {
    // Sort the characters of the string to create a unique key
    const sortedStr = str.split('').sort().join('');
    // Check if the sorted string exists as a key in the hash map
    if (!anagramGroups[sortedStr]) {
      // If not, create a new key with an empty array value
      anagramGroups[sortedStr] = [];
    }
    // Push the original string to the array corresponding to the sorted string
    anagramGroups[sortedStr].push(str);
  }
  // Convert the values of the hash map to an array and return
  return Object.values(anagramGroups);
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams1(strs));

// Hash Map Initialization:
// We initialize an empty hash map anagramGroups1 to store groups of anagrams. Keys will be sorted versions of the strings, and values will be arrays of original strings that share the same sorted version.
// Iterating Through the Input Array:
// We iterate through each string in the input array strs.
// Sorting the Characters of Each String:
// For each string, we split it into an array of characters, sort the characters alphabetically, and then join them back into a string. This sorted string will serve as a unique key for anagrams.
// Checking and Updating the Hash Map:
// If the sorted string does not exist as a key in the hash map, we create a new key with an empty array value.
// We then push the original string into the array corresponding to the sorted string key.
// Converting the Hash Map Values to an Array:
// Finally, we convert the values of the hash map to an array and return it. Each element of this array will be an array containing a group of anagrams.
// This algorithm has a time complexity of O(n * k * log(k)), where n is the length of the input array strs and k is the maximum length of a string in strs. This complexity arises from sorting each string before using it as a key in the hash map.
