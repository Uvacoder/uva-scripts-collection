// CONVERT DATE
const date = new Date("2021-11-07T10:53:30Z");
// const date = new Date();
const now = date.toISOString().substr(0, date.toISOString().indexOf(".")) + "Z";
console.log(now);

const getTimeNow = () => {
  let date = new Date();
  return date.toISOString().substr(0, date.toISOString().indexOf(".")) + "Z";
};
