// check if a string is a pangram (contains every letter of the alphabet)
function pangram(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  str = str.toLowerCase().replace(/[^a-z]/g,'');
  for (var i = 0; i < 26; i++) {
    if (str.indexOf(alphabet[i]) < 0) {
      console.log("not pangram");
      return false;
    }
  }
  console.log("pangram");
}
