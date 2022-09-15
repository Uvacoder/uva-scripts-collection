// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

/* SOLUTION ONE */
// function testJackpot(result) {
//   return result.every(e => e === result[0]);
// }

/* SOLUTION TWO */
function testJackpot(result) {
  // console.log(new Set(...result))
  // console.log(...result)
  return new Set(result).size === 1;
}

console.log(testJackpot(["@", "@", "@", "@"]));
//  ➞ true

console.log(testJackpot(["abc", "abc", "abc", "abc"]));
//  ➞ true

console.log(testJackpot(["SS", "SS", "SS", "SS"]));
//  ➞ true

console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
//  ➞ false

console.log(testJackpot(["SS", "SS", "SS", "Ss"]));
//  ➞ false
