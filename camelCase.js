// count the number of words in a camelcased string
function main(s) {
  s = s.split('');
  var numWords = 1;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      numWords++;
    }
  }
  console.log(numWords);
}

main('saveChangesInTheEditor');
