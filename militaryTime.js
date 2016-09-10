// Convert and print the given time in -hour format
function main(time) {
    var militaryTime = "";
    if (time.indexOf('PM') > 0) {
       var hours = parseInt(time.substring(0,2));
       hours += 12;
       militaryTime = hours + time.substring(2,8);
       console.log(militaryTime);
    }
}

main('07:05:45PM');
