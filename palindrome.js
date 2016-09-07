// Check for Palindromes
function palindrome(str) {
  str = str.replace(/[^0-9a-z]/gi, '');
  str = str.toLowerCase();
  console.log("String: " + str);
  console.log("Reversed string: " + str.split('').reverse().join(''));
  if (str == str.split('').reverse().join('')) {
    return true;
  }
  else {
    return false;
  }
}
palindrome("0_0 (: /-\ :) 0-0");
