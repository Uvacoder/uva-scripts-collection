// Write a function that takes an array of strings as argument
// It should return the longest string

function myFunction(arr) {
  return arr.reduce((a, b) => (a.length > b.length ? a : b));
}

console.log(myFunction(["help", "me"]));
// Expected;
// ('help');
console.log(myFunction(["I", "need", "candy"]));
// Expected;
// ('candy');
