// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (str.length > num && num > 3) {
    str = str.slice(0, (num - 3)) + "...";
    return str;
  } else if (str.length > num && num <= 3) {

    return str.slice(0, num) + '...';
  } else {
    return str;
  }
}

truncateString("Absolutely Longer", 2);
