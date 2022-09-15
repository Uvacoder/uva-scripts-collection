// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max

function myFunction(min, max) {
  let length = max - min + 1;
  // return Array.from({ length: length }, (v, i) => i + min);
  
  return Array.from({ length }, (v, i) => i + min);
}

console.log(myFunction(2, 10));
// Expected
// [2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(myFunction(1, 3));

// Expected
// [1, 2, 3]
// console.log(myFunction(-5, 5));

// Expected
// [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]

// console.log(myFunction(2, 7));
// Expected
// [2, 3, 4, 5, 6, 7]

/* Sequence generator function */

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

// Generate numbers range 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


