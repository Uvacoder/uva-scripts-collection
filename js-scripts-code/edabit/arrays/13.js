// Create a function to count the number of 1s in a 2D array.

/* SOLUTION ONE */
// function countOnes(matrix) {
// 	return matrix.flat().reduce((a,b) => b===1 ? a + b : a + 0, 0)
// }

/* SOLUTION TWO */
function countOnes(matrix) {
	return matrix.flat().filter(item => item === 1).length
}

console.log(
  countOnes([
    [1, 0],
    [0, 0],
  ])
);
//    ➞ 1

console.log(
  countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
  ])
);
//    ➞ 7

console.log(
  countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
  ])
);
//    ➞ 2
