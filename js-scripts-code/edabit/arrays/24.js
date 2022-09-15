// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".

function findNemo(sentence) {
  sentence = sentence.split(" ");
  return sentence.includes("Nemo")
    ? `I found Nemo at ${sentence.indexOf("Nemo") + 1}!`
    : "I can't find Nemo :(";
}

console.log(findNemo("I am finding Nemo !"));
//  ➞ "I found Nemo at 4!"

console.log(findNemo("Nemo is me"));
//  ➞ "I found Nemo at 1!"

console.log(findNemo("I Nemo am"));
//  ➞ "I found Nemo at 2!"
