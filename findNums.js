function findNums(arr) {
  var numPositive = 0;
  var numNegative = 0;
  var zeroes = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroes++;
    } else if (arr[i] > 0) {
      numPositive++;
    } else if (arr[i] < 0) {
      numNegative++;
    }
  }
  numPositive = (numPositive / arr.length).toFixed(6);
  numNegative = (numNegative / arr.length).toFixed(6);
  zeroes = (zeroes / arr.length).toFixed(6);
  console.log(numPositive);
  console.log(numNegative);
  console.log(zeroes);
}

findNums([-4, 3, -9, 0, 4, 1]);
