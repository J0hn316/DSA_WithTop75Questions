// Level Hard
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// Example:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"

function minWindowSubstring(s, t) {
  // Store the frequency of characters in string t
  const targetChars = {};
  for (let char of t) {
    targetChars[char] = (targetChars[char] || 0) + 1;
  }
  // Count of unique characters in t
  let requiredChars = Object.keys(targetChars).length;
  // Left pointer of the sliding window
  let left = 0;
  // Right pointer of the sliding window
  let right = 0;
  // Initialize the minimum length of the window
  let minLength = Infinity;
  // Initialize the start index of the minimum window
  let minStart = 0;
  // Store the frequency of characters in the current window
  let charCount = {};

  // Function to check if the current window contains all characters of t
  const isValidWindow = () => {
    for (let char in targetChars) {
      if (!(char in charCount) || charCount[char] < targetChars[char]) {
        return false;
      }
    }
    return true;
  };
  // Expand the window until it contains all characters of t
  while (right < s.length) {
    const rightChar = s[right];
    // Update the frequency of the right character
    charCount[rightChar] = (charCount[rightChar] || 0) + 1;
    // Check if the current window contains all characters of t
    while (isValidWindow() && left <= right) {
      // Update the minimum length and start index of the window if needed
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minStart = left;
      }
      // Shrink the window from the left
      const leftChar = s[left];
      charCount[leftChar]--;
      if (charCount[leftChar] === 0) {
        delete charCount[leftChar];
      }
      left++;
    }
    right++;
  }
  return minLength === Infinity
    ? ''
    : s.substring(minStart, minStart + minLength);
}

const s = 'ADOBECODEBANC';
const t = 'ABC';
console.log(minWindowSubstring(s, t));

// Counting Target Characters: We first count the frequency of each character in string t and store it in targetChars.
// Initialization: We initialize variables requiredChars to keep track of the number of unique characters in t, left and right pointers for the sliding window, minLength to store the minimum window length found so far, minStart to store the start index of the minimum window, and charCount to store the frequency of characters in the current window.
// isValidWindow Function: We define a helper function isValidWindow to check if the current window contains all characters of t.
// Expanding the Window: We move the right pointer to expand the window until it contains all characters of t.
// Shrinking the Window: Once we have a valid window, we move the left pointer to shrink the window while maintaining its validity, trying to minimize its size.
// Updating Minimum Length and Start Index: While shrinking the window, we update minLength and minStart if we find a smaller window that still contains all characters of t.
// Returning the Result: Finally, we return the substring of s starting from minStart with a length of minLength, or an empty string if no valid window is found.
