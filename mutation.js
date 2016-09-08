// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();
  for (var i = 0; i < str2.length; i++) {
    if(str1.indexOf(str2[i]) == -1) {
      return false;
    }
  }
  return true;
}

// false
mutation(["hello", "hey"]);

// true
mutation(["hello", "Hello"]);

// true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
