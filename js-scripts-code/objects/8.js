// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

function myFunction(obj) {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[obj[key]] = key;
  });
  return newObj;
}

console.log(
  myFunction({ bear: "animal", sow: "female", boar: "male", cub: "young" })
);
// Expected
// { animal: 'bear', female: 'sow', male: 'boar', young: 'cub' }
console.log(
  myFunction({ sheep: "animal", ewe: "female", ram: "male", lamb: "young" })
);
// Expected
// { animal: 'sheep', female: 'ewe', male: 'ram', young: 'lamb' }
console.log(myFunction({ Berlin: "city", Germany: "country" }));
// Expected
// { city: 'Berlin', country: 'Germany' }
