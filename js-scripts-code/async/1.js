async function fetch() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("b");
    }, 200);
  });
}

async function logger() {
  setTimeout(() => {
    console.log("a");
  }, 100);
  console.log(await fetch());
  console.log("c");
}

console.log("hello", logger());
