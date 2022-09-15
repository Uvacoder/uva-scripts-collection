// CAPITALIZE
var str = "hello world how ya doing?";
var result = step2(str);
function step2(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(result);
