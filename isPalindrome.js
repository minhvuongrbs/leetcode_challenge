/**
 * 125. Valid Palindrome
 *
 * @param {string} s
 * @return {boolean}
 * 
 * Exp: how to reverse a string: 
 * 1. change it to array => reverse array => join array to become revered string.
 * Exp: 
 */
var isPalindrome = function (s) {
  const formattedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  const reveredString = formattedString.split('').reverse().join('');

  return formattedString === reveredString ? true : false;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
