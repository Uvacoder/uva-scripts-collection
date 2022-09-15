// Write two functions:

// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.

function toArray(num) {
  return num
    .toString()
    .split("")
    .map((num) => Number(num));
}

function toNumber(arr) {
    return arr.join('')
}

console.log(toArray(235));
//  ➞ [2, 3, 5]

console.log(toArray(0));
//  ➞ [0]

console.log(toNumber([2, 3, 5]));
//  ➞ 235

console.log(toNumber([0]));
//  ➞ 0
