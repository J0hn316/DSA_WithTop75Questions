// Level: Medium
// Given a string s, find the length of the longest substring without repeating characters.
// Example:
// Input: s = "abcabcbb"
// Output: 3

function lengthOfLongestSubString(s) {
  let maxLength = 0;
  let charMap = {};
  for (let i = 0; i < s.length; i++) {
    if (!charMap[s[i]]) {
      charMap[s[i]] = true;
      maxLength = Math.max(maxLength, Object.keys(charMap).length);
    } else {
      while (charMap[s[i]]) {
        delete charMap[Object.keys(charMap)[0]];
      }
      charMap[s[i]] = true;
    }
  }
  return maxLength;
}

//console.log(lengthOfLongestSubString('abcabcbb')); // Expected output: 3
//console.log(lengthOfLongestSubString('bbbbb')); // Expected output: 1

// ChatGPT answer

function lengthOfLongestSubString1(s) {
  // Initialize the maximum length of the substring
  let maxLength = 0;
  // Initialize the start index of the substring
  let start = 0;
  // Create a map to store the index of each character
  let charMap = {};

  // Loop through the string
  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    // If the current character is already in the map and its index is after the start index
    if (charMap[currentChar] !== undefined && charMap[currentChar] >= start) {
      // Update the start index to the index after the last occurrence of the current character
      start = charMap[currentChar] + 1;
    }
    // Update the index of the current character in the map
    charMap[currentChar] = end;
    // Update the maximum length of the substring
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

const input = 'bbbbb';
console.log(lengthOfLongestSubString1(input));
