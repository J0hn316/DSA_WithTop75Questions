// Level Medium
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.
// Example:
// Input: s = "ABAB", k = 2
// Output: 4

function characterReplacement(s, k) {
  // Initialize the maximum count of the same letter
  let maxCount = 0;
  // Initialize the maximum length of the substring
  let maxLength = 0;
  // Create a map to store the frequency of each character
  let charCount = {};
  // Initialize the start index of the substring
  let start = 0;

  // Loop through the string
  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];
    // Update the frequency of the current character
    charCount[currentChar] = (charCount[currentChar] || 0) + 1;

    // Update the maximum count of the same letter
    maxCount = Math.max(maxCount, charCount[currentChar]);

    // If the length of the current substring minus the maximum count is greater than k,
    // move the start index of the substring to the right
    while (end - start + 1 - maxCount > k) {
      const startChar = s[start];
      // Decrement the frequency of the character at the start index
      charCount[startChar]--;
      // Move the start index to the right
      start++;
    }
    // Update the maximum length of the substring
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

const s = 'ABAB';
const k = 2;
console.log(characterReplacement(s, k));
