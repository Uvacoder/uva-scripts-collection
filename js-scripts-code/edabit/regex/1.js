// Write a function that takes a string, breaks it up and returns it with vowels first, consonants second. For any character that's not a vowel (like special characters or spaces), treat them like consonants.

/* SOLUTION ONE */
// function split(str) {
//   return str.replace(/[^aeiou]/gi, "") + str.replace(/[aeiou]/gi, "");
// }

/* SOLUTION TWO */
function split(str) {
  let a = str.match(/[aeiou]/gi);
  let b = str.match(/[^aeiou]/gi);
  return a.concat(b).join("");
}

console.log(split("abcde"));
//  ➞ "aebcd"

console.log(split("Hello!"));
//  ➞ "eoHll!"

console.log(split("What's the time?"));
//  ➞ "aeieWht's th tm?"
