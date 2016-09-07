// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  if (num < 0) {
    str = "";
    return str;
  }
  var strConcat = str;
  for (var i = 1; i < num; i++) {
    str += strConcat;
  }
  return str;
}

repeatStringNumTimes("abc", 3);
