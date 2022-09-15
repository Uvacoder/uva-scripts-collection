// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

function calculateDifference(obj, limit) {
  let amt = Object.values(obj).reduce((a, b) => a + b);
  return Math.abs(amt - limit);
}

console.log(calculateDifference({ "baseball bat": 20 }, 5));
//  ➞ 15

console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
//  ➞ 11

console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
//  ➞ 1
