// Reverse the string
function reverseString(str) {
  str = str.toString().split('').reverse().join('');
  return str;
}

reverseString("hello");
