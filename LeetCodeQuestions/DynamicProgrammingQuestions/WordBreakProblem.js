// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

function wordBreak(s, wordDict) {
  let dict = new Set(wordDict);
  // console.log('dict', dict);
  return helper(0, s.length - 1, '');
}

// Helper function to perform the DFS on the string array
const helper = (start, end, currWord) => {
  if (start > end) return true;
  for (let i = start; i <= end; i++) {
    const subStr = s.substring(start, i + 1);
    if (!dict.has(currWord + subStr)) continue;
    if (helper(i + 1, end, currWord + subStr)) return true;
  }
  return false;
};

console.log(wordBreak('leetcode', ['leet', 'code'])); // output : [true]

// ChatGPT answer

function wordBreak1(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true; // Empty string can always be segmented

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}

console.log(wordBreak1('leetcode', ['leet', 'code'])); // Output: true

// To solve this problem, we can use dynamic programming. We'll create a boolean array dp of size s.length + 1,
// where dp[i] will represent whether the substring s[0:i] can be segmented into words from the dictionary.
// We'll initialize dp[0] to true because an empty string can always be segmented.
// Then, for each index i from 1 to s.length, we'll iterate through all previous indices j from 0 to i - 1.
// For each j, if dp[j] is true (indicating that the substring s[0:j] can be segmented) and the substring s[j:i] is present in the dictionary,
// we'll set dp[i] to true.
// Finally, we'll return dp[s.length], which indicates whether the entire string s can be segmented into words from the dictionary.

// This solution has a time complexity of O(n^2 * m), where n is the length of the string s and m is the number of words in the dictionary.
// The space complexity is O(n), where n is the length of the string s.
