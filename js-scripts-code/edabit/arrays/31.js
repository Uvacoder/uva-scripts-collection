// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

/* SOLUTION ONE */
// function capMe(arr) {
//   return arr
//     .map((item) => item.toLowerCase())
//     .map((item) => item.slice(0, 1).toUpperCase() + item.slice(1));
// }

/* SOLUTION TWO */
// function capMe(arr) {
//   return arr.map(item => item[0].toUpperCase() + item.substring(1).toLowerCase())
// }

/* SOLUTION THREE */
function capMe(arr) {
  return arr.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  );
}
console.log(capMe(["mavis", "senaida", "letty"]));
//  ➞ ["Mavis", "Senaida", "Letty"]

console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]));
//  ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]));
//  ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
