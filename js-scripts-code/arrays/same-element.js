// return true if all the elements in the array is the same; otherwise return false
function myFunction(arr) {
  let ele = arr[0];
  let val;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === ele) {
      val = true;
    } else {
      val = false;
    }
  }
  return val;
}

console.log(myFunction(["10", 10, 10, 10]));
