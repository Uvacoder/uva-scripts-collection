const numbers = [-2, -1, 0, 1, 2];

// let doubledNumber = []
// numbers.map(function (number) {
//     doubledNumber.push(number * 2)
// })

const doubledNumber = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNumber);
