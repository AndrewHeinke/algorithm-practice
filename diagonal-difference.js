process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var a = [];
    var sumFirstDiagonal = 0;
    var sumSecondDiagonal = 0;
    var difference = 0;
    console.log(difference);
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
      //  sumFirstDiagonal += parseInt(a[a_i - 1])
      //  sumSecondDiagonal += parseInt (a[a.length - a_i])

    }
    // difference = sumFirstDiagonal - sumSecondDiagonal;
    // difference = Math.abs(difference);
    // console.log(difference);

}
