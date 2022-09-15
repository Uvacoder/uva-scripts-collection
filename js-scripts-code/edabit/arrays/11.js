// Create a function that takes a string str and performs simple encoding as per the following method:

// Replace all single occurrence characters with [
// Replace all characters with two or more occurrences with ]

function simpleEncoder(str) {
  return str
    .toLowerCase()
    .split("")
    .map((item, i, arr) =>
      arr.indexOf(item) === arr.lastIndexOf(item) ? "[" : "]"
    )
    .join("");
}

console.log(simpleEncoder("Mubashir"));
//  ➞ "[[[[[[[["
// '[' for each character

console.log(simpleEncoder("Matt"));
//  ➞ "[[]]"
// ']' for both 't'

console.log(simpleEncoder("eD  aBiT"));
//  ➞ "[[]][[[["
// Two spaces in between
