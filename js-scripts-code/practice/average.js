// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction(arr) {
    let total = arr.reduce((a,b) => a + b)
    let result = total / arr.length
    return result
 }

console.log(myFunction([10,100,40]))
// Expected
// 50

console.log(myFunction([10,100,1000]))
// Expected
// 370

console.log(myFunction([-50,0,50,200]))
// Expected
// 50