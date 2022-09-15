// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a, b) {
  let arrA = [...a];

  let result = a + b;
  arrA.forEach((letter) => {
    if (b === letter) {
      result = b + a;
    }
  });
  return result;
}

console.log(myFunction("cheese", "cake"));
// Expected
// 'cheesecake'

console.log(myFunction("lips", "s"));
// Expected
// 'slips'

console.log(myFunction("Java", "script"));
// Expected
// 'Javascript'

console.log(myFunction(" think, therefore I am", "I"));
// Expected
// 'I think, therefore I am'
