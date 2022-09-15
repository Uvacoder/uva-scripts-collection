// Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(arr) {
  return arr.reduce((a, b) => a + b * b * b, 0);
}

console.log(sumOfCubes([1, 5, 9]));
//  ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

console.log(sumOfCubes([3, 4, 5]));
//  ➞ 216

console.log(sumOfCubes([2]));
//  ➞ 8

console.log(sumOfCubes([]));
//  ➞ 0
