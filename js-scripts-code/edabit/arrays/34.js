// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

/* SOLUTION ONE */
// function inkLevels(inks) {
// 	return Object.values(inks).reduce((a,b) => a > b ? b : a )
// }

/* SOLUTION TWO */
function inkLevels(inks) {
  return Math.min(...Object.values(inks));
}

console.log(
  inkLevels({
    cyan: 23,
    magenta: 12,
    yellow: 10,
  })
);
//    ➞ 10

console.log(
  inkLevels({
    cyan: 432,
    magenta: 543,
    yellow: 777,
  })
);
//    ➞ 432

console.log(
  inkLevels({
    cyan: 700,
    magenta: 700,
    yellow: 0,
  })
);
//    ➞ 0
