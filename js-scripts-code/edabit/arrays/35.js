// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

/* SOLUTION ONE */
// function isRepdigit(num) {
// 	let arr = num.toString().split('')
// 	return num > 0 ? arr.every(digit => digit === arr[0]) : num === 0 ? true : false
// }

/* SOLUTION TWO - much simplier using set */
function isRepdigit(num) {
  return new Set("" + num).size === 1;
}

console.log(isRepdigit(66));
//  ➞ true

console.log(isRepdigit(0));
//  ➞ true

console.log(isRepdigit(-11));
//  ➞ false
