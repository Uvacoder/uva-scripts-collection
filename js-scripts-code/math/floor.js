// check if the given number is a whole number
function myFunction(num) {
  if (num - Math.floor(num) === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(myFunction(10.48));
