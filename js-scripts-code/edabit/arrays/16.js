// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

function spelling(str) {
  return [...str].map((l, i) => str.slice(0, i + 1));
}

console.log(spelling("bee"));
//  ➞ ["b", "be", "bee"]

console.log(spelling("happy"));
//  ➞ ["h", "ha", "hap", "happ", "happy"]

console.log(spelling("eagerly"));
//  ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
