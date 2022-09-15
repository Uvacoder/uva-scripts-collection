let date = "2021-12-18T14:53:12Z";
const weekday = new Date(date)
  .toLocaleDateString("en-us", { weekday: "long" })
  .toUpperCase();
console.log(weekday);
