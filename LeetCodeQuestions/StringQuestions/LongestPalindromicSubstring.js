// Medium
// Given a string s, return the longest palindromic substring in s.
// Example 1:
// Input: s = "babad"
// Output: "bab"

function longestPalindromes(s) {
  if (s.length < 2) return s;

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);

    let len = Math.max(len1, len2) - 1;
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + (len + 1) / 2;
    }
  }

  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

console.log(longestPalindromes('babad')); // Output: "bab"

function longestPalindrome(s) {
  if (s.length < 0) return '';

  // Start index of the longest palindrome found so far
  let start = 0;
  // Length of the longest palindrome found so far
  let maxLength = 1;
  // Initialize a 2D table to store whether substrings are palindromes
  const dp = Array(s.length)
    .fill()
    .map(() => Array(s.length).fill(false));
  // Single characters are always palindromes
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }
  // Check for palindromes of length 2
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }
  // Check for palindromes of length greater than 2
  for (let length = 3; length <= s.length; length++) {
    for (let i = 0; i < s.length - length + 1; i++) {
      // Ending index of current substring
      const j = i + length - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        start = i;
        maxLength = length;
      }
    }
  }
  // Return the longest palindrome found
  return s.substring(start, start + maxLength);
}

const s = 'babad';
console.log(longestPalindrome(s));

// Initialization:
// We initialize start to store the start index of the longest palindrome found so far and maxLength to store its length.
// We create a 2D table dp to store whether substrings are palindromes. Each cell dp[i][j] represents whether the substring from index i to index j is a palindrome.
// Base Cases:
// We mark single characters in the string as palindromes (dp[i][i] = true).
// We also check for palindromes of length 2 and update start and maxLength accordingly.
// Checking Palindromes of Length Greater Than 2:
// We iterate through all possible lengths of substrings greater than 2.
// For each length, we iterate through all possible starting indices of substrings.
// If the characters at both ends of the substring are equal and the substring between them is also a palindrome, we mark the substring as a palindrome and update start and maxLength.
// Returning the Result:
// Finally, we return the substring of s starting from start with a length of maxLength, which represents the longest palindromic substring found.
// This algorithm has a time complexity of O(n^2) and a space complexity of O(n^2), where n is the length of the input string s, because we fill a 2D table of size n*n.
