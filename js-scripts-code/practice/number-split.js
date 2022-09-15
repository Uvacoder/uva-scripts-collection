// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

/* SOLUTION ONE */
// function numberSplit(n) {
//   let result = [];
//   if (n % 2 === 0) {
//     result = [n / 2, n / 2];
//   } else {
//     let remainder = n % 2;
//     if (remainder > 0) {
//       result = [(n - remainder) / 2, (n - remainder) / 2 + remainder];
//     } else {
//       result = [(n + remainder) / 2, (n + remainder) / 2 - remainder];
//     }
//   }
//   return result;
// }
/* SOLUTION ONE  - ternary operator */
function numberSplit(n) {
  let result = [];
  if (n % 2 === 0) {
    result = [n / 2, n / 2];
  } else {
    let remainder = n % 2;
    result =
      remainder > 0
        ? [(n - remainder) / 2, (n - remainder) / 2 + remainder]
        : [(n + remainder) / 2, (n + remainder) / 2 - remainder];
  }
  return result;
}

/* SOLUTION TWO */
// function numberSplit(n) {
//     return [Math.floor(n/2), Math.ceil(n/2)]
// }

console.log(numberSplit(4));
// ➞ [2, 2]

console.log(numberSplit(10));
// ➞ [5, 5]

console.log(numberSplit(11));
// ➞ [5, 6]

console.log(numberSplit(-9));
// ➞ [-5, -4]
