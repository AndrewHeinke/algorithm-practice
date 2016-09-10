// Alice has a binary string, B, of length n. She thinks a binary string is beautiful if and only if it doesn't contain the substring "010".
// Count and print the minimum number of steps needed to make Alice see the string as beautiful
function binaryString(n, B) {
  n = parseInt(n);
  var count = 0;
  while (B.indexOf('010') > -1) {
    B = B.replace('010','011');
    count++;
  }
  console.log(count);
}

binaryString(7, '0101010');
