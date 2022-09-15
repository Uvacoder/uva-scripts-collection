// put things in object
function putThingInObject(thing) {
  return { contents: thing };
}

let containedFive = putThingInObject(5);
console.log(containedFive.contents);
console.log(containedFive.contents + 2);
