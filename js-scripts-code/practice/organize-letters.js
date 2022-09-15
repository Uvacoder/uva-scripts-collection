// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
  let str2 = b.replace("%", "").split("").reverse().join("");
  let str1 = a.replace("%", "");
  return str1.slice(0, 1).toUpperCase() + str1.slice(1) + str2;
}

console.log(myFunction("java", "tpi%rcs"));
// Expected
// 'Javascript'
console.log(myFunction("c%ountry", "edis"));
// Expected
// 'Countryside'
console.log(myFunction("down", "nw%ot"));
// Expected
// 'Downtown'
