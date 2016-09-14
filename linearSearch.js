// * Write a `for` loop that looks at each index of the array to see if it matches the random value
// * If it does match the random value display an alert box with the index of the array and the value
var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = stuff[ Math.ceil( Math.random() * 14 ) ];

function search(stuff, random_value) {
  for (var i = 0; i < stuff.length; i++) {
    if (stuff[i] == random_value) {
      console.log("Index: " + i + "   Value: " + random_value);
      return i;
    }
  }
  console.log("Number not found");
};

search(stuff, random_value);
