// Level Easy
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if :
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false

function isValid(s) {
  const stack = [];
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (let char of s) {
    if (char in brackets) {
      // Push opening brackets onto the stack
      stack.push(char);
    } else {
      // If stack is empty or the popped bracket doesn't match the current closing bracket, return false
      if (!stack.length || brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }

  // If there are unmatched brackets remaining in the stack, return false
  return stack.length === 0;
}

console.log(isValid('()')); // Expected output: true
console.log(isValid('()[]{}')); // Expected output: true
console.log(isValid('([)]')); // Expected output: false
console.log(isValid('{[]}')); // Expected output: true

// Initialization:
// We initialize an empty array stack to serve as our stack data structure.
// We create an object brackets to store mappings of opening brackets to their corresponding closing brackets.
// Iteration Through the String:
// We iterate through each character char in the string s.
// Pushing Opening Brackets onto the Stack:
// If the current character char is an opening bracket (i.e., it exists in the brackets object), we push it onto the stack.
// Popping and Matching Closing Brackets:
// If the current character char is a closing bracket:
// We check if the stack is empty. If it is, it means there is no corresponding opening bracket, so we return false.
// We pop the top element from the stack, representing the most recent opening bracket.
// We compare the popped bracket with the current closing bracket char. If they do not match, it means the string is invalid, so we return false.
// Final Check:
// After iterating through all characters, if there are unmatched opening brackets remaining in the stack, it means the string is invalid. We return false in this case.
// If the stack is empty at the end, it means all brackets have been matched and closed in the correct order, so we return true.
// This algorithm has a time complexity of O(n), where n is the length of the input string s, because we iterate through each character of the string once. The space complexity is also O(n) due to the stack usage.
