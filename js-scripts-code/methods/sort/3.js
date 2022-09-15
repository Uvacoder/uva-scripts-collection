// Write a function that takes an array of strings as argument
// It should return the array with its values sorted alphabetically

function myFunction(arr) {
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

  let index = [];
  let sorted = [];
  arr.forEach((ele, i) => {
    letters.forEach((letter, j) => {
      if (ele === letter) {
        index.push(j);
      }
    });
  });
  index
    .sort((a, b) => a - b)
    .forEach((ele) => {
      sorted.push(letters[ele]);
    });
  return sorted;
}

console.log(myFunction(["b", "c", "d", "a"]));
// Expected
// ['a', 'b', 'c', 'd']
console.log(myFunction(["z", "c", "d", "a", "y", "a", "w"]));
// Expected
// ['a', 'a', 'c', 'd', 'w', 'y', 'z']
