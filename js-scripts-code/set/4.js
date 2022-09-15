// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result

function myFunction(a, b, c) {
  let result = new Set([a, b, c]);
  return result;
}

console.log(myFunction(1, "b", 3));
// Expected
// new Set([1, 'b', 3])

console.log(myFunction(NaN, null, false));
// Expected
// new Set([NaN, null, false])

console.log(myFunction("a", ["b"], { c: 3 }));
// Expected
// new Set(['a', ['b'], { c: 3 }])
