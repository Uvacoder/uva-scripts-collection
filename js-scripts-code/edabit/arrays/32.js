// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

/* SOLUTION ONE */
// function calculateLosses(obj) {
//   let arr = Object.values(obj);
//   return arr.length ? arr.reduce((ac, num) => ac + num, 0) : "Lucky you!";
// }

/* SOLUTION TWO */
function calculateLosses(obj) {
  return Object.values(obj).reduce((ac, num) => ac + num, 0) || "Lucky you!";
}
console.log(
  calculateLosses({
    tv: 30,
    skate: 20,
    stereo: 50,
  })
);

//    ➞ 100

console.log(
  calculateLosses({
    painting: 20000,
  })
);
//    ➞ 20000

console.log(calculateLosses({}));
//    ➞ "Lucky you!"
