// Return the length of the longest word in the sentence
function findLongestWord(str) {
  str = str.split(' ');
  var longestWord = str[0].length;
  for (var i = 1; i < str.length; i++) {
    if (str[i].length > longestWord) {
      longestWord = str[i].length;
    }
  }
  return longestWord;
}

findLongestWord("What is the average airspeed velocity of an unladen swallow");
