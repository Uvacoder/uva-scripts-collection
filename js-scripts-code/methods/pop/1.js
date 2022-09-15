// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

/* SOLUTION ONE */
// function matchLastItem(arr) {
//   return arr.pop() === arr.splice(0, arr.length).reduce((ac, e) => ac + e, "");
// }

/* SOLUTION TWO */
function matchLastItem(arr) {
  //  console.log(arr.pop());
  //  console.log(arr.join(""));
  // return arr.join("");
  return arr.pop() === arr.join("");
}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
//  ➞ true
// The last item is the rest joined.

console.log(matchLastItem([1, 1, 1, "11"]));
//  ➞ false
// The last item should be "111".

console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));
//  ➞ true
