// flattening an Array without using the .flat() method

/* SOLUTION ONE */
// function flatten(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     arr2 = arr2.concat(arr[i]);
//   }
//   return arr2;
// }

/* SOLUTION TWO */
// function flatten(arr) {
//   return [].concat(...arr);
// }

/* SOLUTION THREE */
function flatten(arr) {
    return arr.reduce((a,b) => a.concat(b), [])
}

console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);
//  ➞ []
// Expected: [1, 2, 3, 4]

console.log(
  flatten([
    ["a", "b"],
    ["c", "d"],
  ])
);
//  ➞ []
// Expected: ["a", "b", "c", "d"]

console.log(
  flatten([
    [true, false],
    [false, false],
  ])
);
//  ➞ []
// Expected: [true, false, false, false]
