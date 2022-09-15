// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

// In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.

/* SOLUTION ONE */
// function hackerSpeak(str) {
//   var chars = { a: "4", e: "3", i: "1", o: "0", s: "5" };
//   return str.replace(/[aeios]/g, (letter) => chars[letter]);
// }

/* SOLUTION TWO */
function hackerSpeak(str) {
  return str
    .replace(/e/g, "3")
    .replace(/i/g, "1")
    .replace(/a/g, "4")
    .replace(/o/g, "0")
    .replace(/s/g, "5");
}

console.log(hackerSpeak("javascript is cool"));
//  ➞ "j4v45cr1pt 15 c00l"

console.log(hackerSpeak("programming is fun"));
//  ➞ "pr0gr4mm1ng 15 fun"

console.log(hackerSpeak("become a coder"));
//  ➞ "b3c0m3 4 c0d3r"
