// check how many times str1 repeated in str2
function myFunction(str1, str2) {
  let num = 0;
  Array.from(str2.toLowerCase())
  .forEach((ele) => {
    if (ele === str1) {
      num += 1;
    }
  });
  return num;
}

console.log(
  myFunction("m", "How many times does the character occur in this sentence?")
);
console.log(
  myFunction("h", "How many times does the character occur in this sentence?")
);
console.log(
  myFunction("?", "How many times does the character occur in this sentence?")
);
console.log(
  myFunction("z", "How many times does the character occur in this sentence?")
);

// Expected
// 2

// Expected
// 4

// Expected
// 1

// Expected
// 0
