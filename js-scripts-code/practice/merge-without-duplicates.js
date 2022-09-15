// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function myFunction(arr1, arr2) {
    let combined = [...new Set([...arr1, ...arr2].sort((a, b) => a - b))];
  
    return combined;
  }
  
  console.log(myFunction([1, 2, 3], [3, 4, 5]));
  // Expected[(1, 2, 3, 4, 5)];
  console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
  // Expected[(-11, -10, 5, 22, 41, 42, 333)];
  