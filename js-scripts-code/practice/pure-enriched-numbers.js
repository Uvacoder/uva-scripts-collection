function pureEnrichedNumbers(arr) {
  const ifPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  let newArr = arr.map((obj) => {
    return {
      number: obj.number,
      isEvent: obj.number % 2 === 0,
      isPrime: ifPrime(obj.number),
    };
  });
  return newArr;
}

console.log(
  pureEnrichedNumbers([{ number: 10 }, { number: 3 }, { number: 2 }])
);

// result:
// [
//   { number: 10, isEvent: true, isPrime: false },
//   { number: 3, isEvent: false, isPrime: true },
//   { number: 2, isEvent: true, isPrime: true }
// ]
