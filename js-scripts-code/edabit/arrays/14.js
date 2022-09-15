// Create a function that takes three parameters where:

// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

/* SOLUTION ONE */
// function arrayOperation(x, y, n) {
// 	let result = []
// 	let arr = Array.from({length: y - x + 1}, (_,i) => i + x)
// 	arr.forEach(item => item % n === 0 && result.push(item))
// 	return result
// }

/* SOLUTION TWO */
function arrayOperation(x, y, n) {
  return Array.from({ length: y - x + 1 }, (_, i) => i + x).filter(
    (item) => item % n === 0
  );
}

console.log(arrayOperation(1, 10, 3));
//  ➞ [3, 6, 9]

console.log(arrayOperation(7, 9, 2));
//  ➞ [8]

console.log(arrayOperation(15, 20, 7));
//  ➞ []
