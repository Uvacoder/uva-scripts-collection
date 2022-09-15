// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

/* SOLUTION ONE */
// function progressDays(runs) {
//   let result = 0;
//   runs.slice(1).forEach((run, i) => (run > runs[i] ? (result += 1) : result));
//   return result;
// }

/* SOLUTION TWO */
// function progressDays(runs) {
//   return runs.reduce((ac, _, i) => (runs[i] > runs[i - 1] ? ac + 1 : ac), 0);
// }

/* SOLUTION THREE */
function progressDays(runs) {
  return runs.filter((e, i) => e < runs[i + 1]).length;
}

console.log(progressDays([3, 4, 1, 2]));
//  ➞ 2
// There are two progress days, (3->4) and (1->2)

console.log(progressDays([10, 11, 12, 9, 10]));
//  ➞ 3

console.log(progressDays([6, 5, 4, 3, 2, 9]));
//  ➞ 1

console.log(progressDays([9, 9]));
//   ➞ 0
