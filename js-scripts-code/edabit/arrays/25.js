// The Code tab has a code which attempts to add a clone of an array to itself. 

/* SOLUTION ONE */
// function clone(arr) {
// 	arr.push([...arr])
// 	return arr
// }

/* SOLUTION TWO */
function clone(arr) {
	return [...arr, arr]
}

console.log(clone([1, 1]))
//  ➞ [1, 1, [1, 1]]

console.log(clone([1, 2, 3]))
//  ➞ [1, 2, 3, [1, 2, 3]]

console.log(clone(["x", "y"]))
//  ➞ ["x", "y", ["x", "y"]]