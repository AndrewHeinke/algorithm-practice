// Convert and print the given time in -hour format
function main(time) {
    var militaryTime = "";
    if ((time.indexOf('PM') > 0) && time.substring(0,2) !== '12') {
       var hours = parseInt(time.substring(0,2));
       hours += 12;
       militaryTime = hours + time.substring(2,8);
       console.log(militaryTime);
    }
    else if ((time.indexOf('AM') > 0) && (time.substring(0,2) == '12')) {
      var hours = parseInt(time.substring(0,2));
      hours = "00";
      militaryTime = hours + time.substring(2,8);
      console.log(militaryTime);
    }
    else {
      militaryTime = time.substring(0,8);
      console.log(militaryTime);
    }
}

main('12:45:54PM');
// should be 00:40:22
