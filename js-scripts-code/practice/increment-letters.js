// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function myFunction(str) {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "g",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let arr = str.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (arr[i] == letters[j]) {
        newArr.push(letters[j + 1]);
      }
    }
  }
  return newArr.join("");
}

console.log(myFunction("bnchmf"));
// Expected
// 'coding'
console.log(myFunction("bgddrd"));
// Expected
// 'cheese'
console.log(myFunction("sdrshmf"));
// Expected
// 'testing'
