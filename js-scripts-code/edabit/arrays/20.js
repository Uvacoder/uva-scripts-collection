// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Notes
// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01

/* SOLUTION ONE */
// function changeEnough(change, amountDue) {
//   let total =
//     (change[0] * 25 + change[1] * 10 + change[2] * 5 + change[3]) / 100;
//   return total >= amountDue;
// }

/* SOLUTION TWO */
function changeEnough(change, amountDue) {
  let temp = [0.25, 0.1, 0.05, 0.01];
  return (
    change.map((num, i) => num * temp[i]).reduce((a, b) => a + b, 0) >=
    amountDue
  );
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
//  ➞ false

console.log(changeEnough([0, 0, 20, 5], 0.75));
//  ➞ true

console.log(changeEnough([30, 40, 20, 5], 12.55));
//  ➞ true

console.log(changeEnough([10, 0, 0, 50], 3.85));
//  ➞ false

console.log(changeEnough([1, 0, 5, 219], 19.99));
//  ➞ false
