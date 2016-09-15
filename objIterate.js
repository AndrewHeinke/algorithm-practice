// JavaScript iterate through object keys and values
var test = {
  'type' : 'news',
  'name' : 'article'
}

function objIterate(obj) {
  var result = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += i + " , " + obj[i] + "\n";
    }
  }
  console.log(result);
}

objIterate(test);
