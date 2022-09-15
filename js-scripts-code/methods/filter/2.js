// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr) {
  /* solution 1 */
  // arr = arr.filter(item => Number.isInteger(item))
  /* solution 2 */
  arr = arr.filter((item) => typeof item !== "string");
  return arr;
}

console.log(filterArray([1, 2, "a", "b"]));
// ➞ [1, 2]

console.log(filterArray([1, "a", "b", 0, 15]));
// ➞ [1, 0, 15]

console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
// ➞ [1, 2, 123]
