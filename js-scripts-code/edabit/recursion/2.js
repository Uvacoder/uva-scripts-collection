// Create a function which takes a parameter n and returns a function such that it, when called n times, returns the string "edabit".

function lambdaDepth(n) {
  return n === 0 ? "edabit" : () => lambdaDepth(n - 1);
}

console.log(lambdaDepth(0));
//  ➞ "edabit"

console.log(lambdaDepth(1)());
//  ➞ "edabit"

console.log(lambdaDepth(2)()());
//  ➞ "edabit"

console.log(typeof lambdaDepth(2)());
//  ➞ "function"
