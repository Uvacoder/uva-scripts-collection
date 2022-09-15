// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

/* SOLUTION ONE */
// function getAbsSum(arr) {
//   return arr.map((num) => Math.abs(num)).reduce((a, b) => a + b);
// }

/* SOLUTION TWO */
function getAbsSum(arr) {
  return arr.reduce((prev, num) => prev + Math.abs(num), 0);
}
console.log(getAbsSum([2, -1, 4, 8, 10]));
//  ➞ 25

console.log(getAbsSum([-3, -4, -10, -2, -3]));
//  ➞ 22

console.log(getAbsSum([2, 4, 6, 8, 10]));
//  ➞ 30

console.log(getAbsSum([-1]));
//  ➞ 1
