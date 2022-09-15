// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

function myFunction(arr, val) {
  // arr.forEach((ele,i) => {
  //   if(ele === val){
  //     arr.splice(i, 1)
  //   }
  // })

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === val) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(myFunction([1, 2, 3], 2))
// Expected[(1, 3)];
console.log(myFunction([1, 2, "2"], "2"))
// Expected[(1, 2)];
console.log(myFunction([false, "2", 1], false))
// Expected[('2', 1)];
console.log(myFunction([1, 2, "2", 1], 1))
// Expected[(2, '2')];
