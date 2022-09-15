// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

/* SOLUTION ONE */
// function formatPhoneNumber(numbers) {
//   let one = numbers.splice(0, 3).join("");
//   let two = numbers.splice(0, 3).join("");
//   numbers = numbers.join("");
//   return `(${one}) ${two}-${numbers}`;
// }

/* SOLUTION TWO */
// function formatPhoneNumber(numbers) {
//   numbers = numbers.join("");
//   let one = numbers.slice(0, 3);
//   let two = numbers.slice(3, 6);
//   let three = numbers.slice(6);
//   return `(${one}) ${two}-${three}`;
// }

/* SOLUTION THREE */
// function formatPhoneNumber(numbers) {
//   let str = numbers.join("");
//   return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`;
// }

/* SOLUTION FOUR */
function formatPhoneNumber(numbers) {
  let template = "(XXX) XXX-XXXX".split("");
  numbers.forEach((num) => (template[template.indexOf("X")] = num));
  return template.join("");
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//  ➞ "(123) 456-7890"

console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));
//  ➞ "(519) 555-4468"

console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));
//  ➞ "(345) 501-2527"
