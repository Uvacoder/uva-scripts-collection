// A value is omnipresent if it exists in every subarray inside the main array.

function isOmnipresent(arr, val) {
  let result;

  arr.every((item) => {
    result = item.includes(val) ? true : false;
  });
  return result;
}

console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    1
  )
);
// ➞ true

console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    6
  )
);
// ➞ false

console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5));
// ➞ true

console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6));
// ➞ false
