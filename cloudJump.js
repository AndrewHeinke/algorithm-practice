function main(c) {
    var jumps = 0;
    var index = 0;
    while (index < c.length - 1) {
        if((index + 2 < c.length) && c[index + 2] != 1) {
            index += 2;
        } else {
            index += 1;
        }
        jumps++;
    }
    console.log(jumps);
}

main('0, 0, 1, 0, 0, 1, 0');
