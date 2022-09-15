// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(num) {
  let arr = num.toString().split("");
  let newArr = arr.map((ele) => Number(ele));
  return newArr;
}

console.log(myFunction(10));
// Expected
// [1,0]
console.log(myFunction(931));
// Expected
// [9,3,1]
console.log(myFunction(193278));
// Expected
// [1,9,3,2,7,8]
