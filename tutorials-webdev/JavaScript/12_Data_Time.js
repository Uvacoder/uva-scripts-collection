console.log('This is Date and Time Tutorial');
let dt = new Date();
console.log(dt);


let newDate = new Date('2020-11-25');
console.log(newDate);

// newDate = new Date(year, month, day, hour, minute, second);
newDate = new Date(2021, 11, 25, 4, 45, 30);
console.log(newDate);

let yr = newDate.getFullYear();
console.log('The year is', yr);

let month = newDate.getMonth();
console.log('The mmonth is', month);

let day = newDate.getDay();
console.log('The day is', day);

let hour = newDate.getHours();
console.log('The hour is', hour);

let minute = newDate.getMinutes();
console.log('The minutes is', minute);

// This will auto change month if required.
newDate.setDate(34);
console.log(newDate);