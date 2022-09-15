let x = "foo";

function logX() {
  console.log(x);
}

x = "bar";

function runLogX() {
  let x = "fizz";
  logX();
}

runLogX();

// result: bar
