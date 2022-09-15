// You are given an array of integers having both negative and positive values, except for one integer which can be negative or positive. Create a function to find out that integer.

/* SOLUTION ONE */
// function lonelyInteger(arr) {
//   return Number([
//     ...new Set(arr.filter((element) => arr.every((ele) => element + ele != 0))),
//   ]);
// }

/* SOLUTION TWO */
// function lonelyInteger(arr) {
//   return [...new Set(arr)].reduce((a, b) => a + b, 0);
// }

/* SOLUTION THREE */
function lonelyInteger(arr) {
  return arr.find((ele) => !arr.includes(-ele));
}

console.log(lonelyInteger([1, -1, 2, -2, 3]));
//  ➞ 3
// 3 has no matching negative appearance.

console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]));
//  ➞ -4
// -4 has no matching positive appearance.

console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]));
//  ➞ -9
