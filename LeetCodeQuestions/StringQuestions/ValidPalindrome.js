// Level Easy
// Given a string s, return true if it is a palindrome, or false otherwise.
// Example:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true

function isPalindrome(s) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the cleaned string is a palindrome
  for (let i = 0; i < Math.floor(cleanedString.length / 2); i++) {
    if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
      return false; // If characters don't match, it's not a palindrome
    }
  }

  return true; // If all characters match, it's a palindrome
}
console.log(isPalindrome('A man, a plan, a canal: Panama')); // Expected output: true
console.log(isPalindrome('race a car')); // Output: false

//Explanation:
// 1) Preprocessing the String:
// We convert the input string s to lowercase using .toLowerCase() to ensure case-insensitive comparison.
// We use .replace(/[^a-z0-9]/g, '') to remove all non-alphanumeric characters from the string. The regular expression /[^a-z0-9]/g matches any character that is not a lowercase letter or a digit (^ negates the character set), and the g flag ensures global matching (i.e., replaces all occurrences).
// 2) Checking for Palindrome:
// We iterate through the first half of the cleaned string.
// For each character at index i, we compare it with the corresponding character from the end of the string (cleanedString.length - 1 - i). If they don't match, it means the string is not a palindrome, so we return false.
// 3.) Returning the Result:
// If the loop completes without finding any mismatches, it means the string is a palindrome, and we return true.

// This algorithm has a time complexity of O(n), where n is the length of the input string s, because we iterate through the string only once. The space complexity is also O(n) due to the creation of the cleaned string.
