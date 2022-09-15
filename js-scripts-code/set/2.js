// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array

function myFunction(set) {
  return [...set];
  // console.log(Array.isArray([...set]))
}

console.log(myFunction(new Set([1, 2, 3])));
// Expected
// [1, 2, 3]
console.log(myFunction(new Set([123])));
// Expected
// [123]
console.log(myFunction(new Set(["1", "2", "3"])));
// Expected
// ['1', '2', '3']
console.log(myFunction(new Set("123")));
// Expected
// ['1', '2', '3']
