// reverse a string without using the javascript reverse method

function stringReverse(str) {
  str = str.toString().split('');
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
}

stringReverse("Old McDonald had a farm");
console.log("<><><><><><><><><><><><><><><><><><><><>");

// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
function repeatString(str, num) {
  if (num < 1) {
    return "";
  }
  var word = str;
  for (var i = 0; i < num; i++) {
    str += word;
  }
  console.log(str);
}

repeatString("bruh", 10);
console.log("<><><><><><><><><><><><><><><><><><><><>");

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
  }
  str = str.join(' ');
  console.log(str);
}

titleCase("old mcDonAlD hAD A fARm lil BRUH");
