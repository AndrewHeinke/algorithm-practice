// Check if a string (first argument, str) ends with the given target string (second argument, target).
//
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  var last = str.substring(str.length - target.length);
  if (last == target) {
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("He has to give me a new name", "name");
