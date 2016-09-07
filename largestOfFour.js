// Return an array consisting of the largest number from each provided sub-array.
function largestOfFour(arr) {
  var largestNumsArr = [];
  for (var i = 0; i < arr.length; i++) {
    var biggestNum = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > biggestNum) {
        biggestNum = arr[i][j];
      }
    }
    largestNumsArr.push(biggestNum);
  }
  return largestNumsArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
