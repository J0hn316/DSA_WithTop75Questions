// Level Easy
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example:
// Input: s = "anagram", t = "nagaram"
// Output: true

function isAnagram(s, t) {
  // Anagrams must have the same length
  if (s.length !== t.length) return false;

  // Character frequency map for string s
  const charCount = {};

  // Count the frequency of characters in string s
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  // Iterate through string t and decrement the count of each character
  // If a character's count becomes negative or it doesn't exist in charCount, return false
  for (let char of t) {
    if (!charCount[char]) {
      // Character not found in s
      return false;
    }
    charCount[char]--;
  }
  // Check if all characters in s have been used in t
  for (let count of Object.values(charCount)) {
    // Some characters in s have not been used in t
    if (count !== 0) {
      return false;
    }
  }
  // Strings are anagrams
  return true;
}

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('foo', 'bar')); // false

// Length Check:
// We first check if the lengths of the strings s and t are equal. If they are not, they cannot be anagrams, so we return false.
// Character Frequency Maps:
// We create an object charCount to store the frequency of each character in string s.
// Counting Characters in s:
// We iterate through each character of string s and count its frequency, storing the counts in the charCount object.
// Checking t Against s:
// We iterate through each character of string t and decrement the count of each character in the charCount object. If a character's count becomes negative or it doesn't exist in charCount, we return false.
// Final Check:
// After processing all characters in t, we check if all characters in s have been used in t. If there are any remaining positive counts in charCount, it means some characters in s have not been used in t, so we return false.
// Return:
// If all checks pass, we return true, indicating that s and t are anagrams of each other.
// This algorithm has a time complexity of O(n), where n is the length of the longer string among s and t, because we iterate through both strings only once.
