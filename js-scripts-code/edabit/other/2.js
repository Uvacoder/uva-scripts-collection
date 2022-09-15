// The left shift operation is similar to multiplication by powers of two.

// Sample calculation using the left shift operator (<<):

// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

/* SOLUTION ONE */
// function shiftToLeft(x, y) {
//   let arr = Array.from({ length: y }, (_, i) => 2);
//   return arr.length ? arr.reduce((ac, num) => ac * num) * x : x;
// }

/* SOLUTION TWO */
// function shiftToLeft(x, y) {
//   return x * 2 ** y;
// }

/* SOLUTION THREE */
function shiftToLeft(x, y) {
  return x * Math.pow(2, y);
}

console.log(shiftToLeft(5, 2));
//  ➞ 20

console.log(shiftToLeft(10, 3));
//  ➞ 80

console.log(shiftToLeft(-32, 2));
//  ➞ -128

console.log(shiftToLeft(-6, 5));
//  ➞ -192

console.log(shiftToLeft(12, 4));
//  ➞ 192

console.log(shiftToLeft(46, 6));
//  ➞ 2944
