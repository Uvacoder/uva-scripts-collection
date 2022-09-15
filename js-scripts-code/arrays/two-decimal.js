// return the value from number percentage; max 2 decimals 
function myFunction(obj) {
  let num = obj.percentage * 0.01 * obj.number
  let rounded = Math.round(num * 100) / 100
  return rounded
}

console.log(myFunction({number: 500, percentage: 99}))
console.log(myFunction({number: 100, percentage: 50}))
console.log(myFunction({number: 777, percentage: 2}))