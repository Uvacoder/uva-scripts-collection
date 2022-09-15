// Write a function that takes an object as argument
// It should return an object with all original object properties but the property with key 'country'

function myFunction(obj) {
  delete obj.country;
  return obj;
}

console.log(
  myFunction({ continent: "Asia", country: "Japan", region: "Kansai" })
);
// Expected
// { continent: 'Asia', region: 'Kansai' }

console.log(
  myFunction({ country: "Sweden", continent: "Europe", planet: "Earth" })
);
// Expected
// { continent: 'Europe', planet: 'Earth' }

console.log(
  myFunction({
    city: "Sacramento",
    state: "California",
    country: "USA",
    continent: "North America",
  })
);
// Expected
// { city: 'Sacramento', state: 'California', continent: 'North America' }
