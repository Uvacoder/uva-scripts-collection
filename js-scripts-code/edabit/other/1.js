// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

/* SOLUTION ONE */
// function addUp(num) {
//   return Array.from({ length: num }, (v, i) => i + 1).reduce(
//     (ac, b) => ac + b,
//     0
//   );
// }

/* SOLUTION TWO */
// function addUp(num) {
//   return (num * (num + 1)) / 2;
// }

/* SOLUTION THREE */
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(addUp(4));
//  ➞ 10

console.log(addUp(13));
//  ➞ 91

console.log(addUp(600));
//  ➞ 180300
