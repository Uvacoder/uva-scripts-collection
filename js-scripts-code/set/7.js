// Write a function that takes two sets, say setA and setB, as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in setA as well as setB

function myFunction(a, b) {
  const intersection = new Set([...a].filter((x) => b.has(x)));

  return intersection;
}

console.log(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6])));
// Expected
// new Set();
console.log(myFunction(new Set("12345"), new Set([..."45678"])));
// Expected
// new Set("45");
console.log(myFunction(new Set([1, 2, 3]), new Set([2, 3, 4])));
// Expected
// new Set([2, 3]);
