// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

function myFunction(a, b) {
    b.forEach(element => {
        a.add(element)
    })
    return a
}

console.log(myFunction(new Set("123"), new Set("234")));
// Expected
// new Set('1234')
console.log(myFunction(new Set([1, 2, 3]), new Set([3, 4, 5])));
// Expected
// new Set([1, 2, 3, 4, 5])
console.log(
  myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))
);
// Expected
// new Set([false, NaN, true])
