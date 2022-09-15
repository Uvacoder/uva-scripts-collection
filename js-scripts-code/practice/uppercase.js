// UPPERCASE
var str = "hello world how ya doing?";
var result = step2(str);
function step2(str) {
  return Array.from(str)
    .map((letter) => letter.toUpperCase())
    .join("");
}
console.log(result);
