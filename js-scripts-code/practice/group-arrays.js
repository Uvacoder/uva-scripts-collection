// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

/* SOLUTION ONE */
function myFunction(arr) {
  let output = arr.reduce((object, name) => {
    object[name[0]] = object[name[0]] || [];
    object[name[0]].push(name);
    console.log("hello", object);
    return object;
  }, {});
  return output;
}

/* SOLUTION TWO */
// function myFunction(arr) {
//   let obj = {};
//   arr.forEach((item) => {
//     let lowercase = item.toLowerCase();
//     obj[lowercase[0]] = obj[lowercase[0]] || [];
//     obj[lowercase[0]].push(item);
//     console.log(obj)
//   });
//   return obj;
// }


console.log(
  myFunction(["Alf", "Ben", "Alice", "Brian", "Alf", "Frank", "Evelyn"])
);
// console.log(myFunction(["Alf", "Alice", "Ben"]));
// myFunction([1, 2, 3]);
// Expected
// { a: ['Alf', 'Alice'], b: ['Ben']}

// console.log(result(['Ant', 'Bear', 'Bird']))
// Expected
// { a: ['Ant'], b: ['Bear', 'Bird']}

// console.log(result(['Berlin', 'Paris', 'Prague']))
// Expected
// { b: ['Berlin'], p: ['Paris', 'Prague']}
