// SWAP KEY VALUE
let oldObj = { a: "1", b: "2" };
let newObj = {}; // should become { 1: 'a', 2: 'b' }

Object.keys(oldObj).forEach((key) => {
  newObj[oldObj[key]] = key;
});

console.log(newObj);
