// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.

function whichIsLarger(f, g) {
  let a = f();
  let b = g();
  return a > b ? "f" : b > a ? "g" : "neither";
}

console.log(
  whichIsLarger(
    () => 5,
    () => 10
  )
);
//  ➞ "g"

console.log(
  whichIsLarger(
    () => 25,
    () => 25
  )
);
//  ➞ "neither"

console.log(
  whichIsLarger(
    () => 505050,
    () => 5050
  )
);
//  ➞ "f"
