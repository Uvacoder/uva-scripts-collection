// Create a function that takes a number and returns an array with the digits of the number in reverse order.

/* SOLUTION ONE */
// function reverseArr(num) {
//   return [...String(num)].map(Number).reverse();
// }

/* SOLUTION TWO */
function reverseArr(num) {
  return [...String(num)].reverse().map((x) => +x);
}

console.log(reverseArr(1485979));
//  ➞ [9, 7, 9, 5, 8, 4, 1]

console.log(reverseArr(623478));
//  ➞ [8, 7, 4, 3, 2, 6]

console.log(reverseArr(12345));
//  ➞ [5, 4, 3, 2, 1]
