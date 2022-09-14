// String Funtions

var str = "This is a string."
console.log(str);

// First Occurance of a substring
var position = str.indexOf('is');
console.log('Position of "is" = ', position);

// Last Occurance of a substring
position = str.lastIndexOf('is');
console.log('Position of "is" = ', position);

// Substring from a string
// First Index is included , last index is excluded
var substr = str.slice(1, 7);
substr = str.substring(1,7);
console.log(substr);

// Here first parameter is first index and second is length.
substr = str.substr(1,4);
console.log(substr);

// Replace
var newStr = str.replace('string', 'new String');
console.log(str);
console.log(newStr);

// Upper or lower Cases
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// We can use this function or simple + for concatenation
newStr = str.concat('................');
console.log(newStr);

// trim will remove extra trailing and begining spaces.
var strWithSpace = " This is a String. ";
console.log(strWithSpace);
console.log(strWithSpace.trim());

var char2 = str.charAt(2);
//var char2 = str.charCodeAt(2);
console.log(char2);
console.log(str[2]);