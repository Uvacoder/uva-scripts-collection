// find the largest number
var numbers = [1, 2, 3, 4];
var result = step4(numbers);
function step4(numbers) {
  return numbers.reduce((a, b) => (a > b ? a : b));
}

console.log(result);
