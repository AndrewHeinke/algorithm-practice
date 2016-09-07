// Check for Palindromes
function palindrome(str) {
  str = str.replace(/[^0-9a-z]/gi, '');
  str = str.toLowerCase();
  if (str == str.split('').reverse().join('')) {
    return true;
  }
  else {
    return false;
  }
}
palindrome("0_0 (: /-\ :) 0-0");
