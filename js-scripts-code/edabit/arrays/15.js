// Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

/* SOLUTION ONE */
// function backToHome(directions) {
//   let arr = [...directions].map((d) => {
//     if (d === "N") {
//       return 1;
//     } else if (d === "S") {
//       return -1;
//     } else if (d === "W") {
//       return 2;
//     } else if (d === "E") {
//       return -2;
//     }
//   });
//   return arr.reduce((a, b) => a + b, 0) === 0 ? true : false;
// }

/* SOLUTION TWO */
function backToHome(directions) {
  let obj = { N: 1, S: -1, W: 2, E: -2 };
  //logical NOT (!) operator - return TRUE for 0 becasue the nagative of 0 is still 0; FALSE for any other number
  return ![...directions].reduce((ac, d) => obj[d] + ac, 0);
}

console.log(backToHome("EEWE"));
//  ➞ false

console.log(backToHome("NENESSWW"));
//  ➞ true

console.log(backToHome("NEESSW"));
//  ➞ false
