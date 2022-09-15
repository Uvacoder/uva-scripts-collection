// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

/* SOLUTION ONE */
// function getOnlyEvens(nums) {
//   return nums.filter((num, i) => num % 2 === 0 && i % 2 === 0);
// }

/* SOLUTION TWO */
// function getOnlyEvens(nums) {
//   let arr = [];
//   nums.forEach((num, i) => {
//     if (num % 2 === 0 && i % 2 === 0) {
//       arr.push(num);
//     }
//   });
//   return arr;
// }

/* SOLUTION THREE */
function getOnlyEvens(nums) {
  let arr = [];
  for (let i = 0; i <= nums.length; i += 2) {
    if (nums[i] % 2 === 0) {
      arr.push(nums[i]);
    }
  }
  return arr;
}

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
// ➞ [2, 4]

console.log(getOnlyEvens([0, 1, 2, 3, 4]));
// ➞ [0, 2, 4]

console.log(getOnlyEvens([1, 2, 3, 4, 5]));
// ➞ []
