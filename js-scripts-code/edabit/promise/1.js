// So we can use resolve and reject callbacks to help us store async results whether successful or unsuccessful, but what good are those if we don't have access to those results. Thus we have the then function which returns a promise that appends either a fulfilled or rejection handler(callback) or just returns the settled value.

// let promise = new Promise( (resolve, reject) => {
//   setTimeout(( ) => {
//      resolve("success!")
//   }, 1000)
// })

// promise.then() // returns the settled value
// promise.then((val) => console.log(val)) // logs the result of the **onFufilled** callback
// Challenge
// Add the necessary pieces to fix the promise and the then function.
// It should resolve to a message success!.
// Re-assign the result to the settled value inside the then function.

let result = "";

let promise = new Promise((resolve, reject) => {
  resolve("success!");
});

// promise.then((val) => {
//   result = val;
//   console.log(result);
// });
promise.then((val) => (result = val, console.log(result)));
