// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  arr = arr.slice();
  var newArray = [];
  for (var i = 0, len = arr.length; i < len; i+=size) {
    newArray.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
// should return [["a", "b"], ["c", "d"]]
