// Level Medium
// Given a string s, return the number of palindromic substrings in it.
// Example:
// Input: s = "abc"
// Output: 3

function countSubStrs(s) {
  let n = s.length;
  if (n < 2) return n;

  let res = 0;
  for (let i = 0; i < n; i++) {
    isPalin(s, i);
  }

  function isPalin(str, start) {
    let l = start,
      r = start + 1;

    while (r < n && str[l] == str[r]) {
      l--;
      r++;
    }

    res += (r - l - 1) / 2 + 1;
  }

  return res;
}

console.log(countSubStrs('abc'));

function countPalindromicSubstrings(s) {
  if (s.length === 0) return 0;

  let count = 0; // Initialize count of palindromic substrings

  // Initialize a 2D table to store whether substrings are palindromes
  const dp = Array(s.length)
    .fill()
    .map(() => Array(s.length).fill(false));

  // Single characters are always palindromes
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    count++; // Each single character is a palindrome
  }

  // Check for palindromes of length 2
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      // Each pair of equal adjacent characters is a palindrome
      count++;
    }
  }

  // Check for palindromes of length greater than 2
  for (let length = 3; length <= s.length; length++) {
    for (let i = 0; i < s.length - length + 1; i++) {
      // Ending index of current substring
      const j = i + length - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        // Current substring is a palindrome
        count++;
      }
    }
  }

  // Return the total count of palindromic substrings
  return count;
}

// Example usage:
const s = 'abc';
console.log(countPalindromicSubstrings(s)); // Output: 3

// Initialization:
// We initialize count to keep track of the number of palindromic substrings found so far.
// We create a 2D array dp to store whether substrings of s are palindromes. We initialize it with false values.
// Base Cases:
// We mark all single characters in s as palindromes and increment count by 1 for each single character.
// Checking Palindromes of Length 2:
// We check for palindromes of length 2. If two adjacent characters are equal, we mark the substring between them as a palindrome and increment count by 1.
// Checking Palindromes of Length Greater Than 2:
// We iterate through all possible lengths of substrings greater than 2.
// For each length, we iterate through all possible starting indices of substrings.
// If the characters at both ends of the substring are equal and the substring between them is also a palindrome, we mark the substring as a palindrome and increment count by 1.
// Returning the Result:
// Finally, we return the total count of palindromic substrings stored in count.
// This algorithm has a time complexity of O(n^2) and a space complexity of O(n^2), where n is the length of the input string s, because we fill a 2D table of size n*n.
