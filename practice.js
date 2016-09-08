// function reverseString(str) {
//   console.log("String Before: " + str);
//   str = str.toString().split('').reverse().join('');
//   console.log("Reversed String: " + str);
// }
function reverseString(str) {
  var reversedString = "";
  str = str.toString().split('');
  for (var i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  console.log("Reversed String: " + reversedString);
}


reverseString("Big Pappi");
