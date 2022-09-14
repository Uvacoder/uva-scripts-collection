console.log('Learn Loops in JS');

// For Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let friends = ["Aryan", "Harsh", "Himanshu", "Kunal"];
for (let index = 0; index < friends.length; index++) {
    console.log('Hello Friend,', friends[index]);
}

friends.forEach(element => {
    console.log('Hello Friend,', element);
});

friends.forEach(function f(element) {
    console.log('Hello Friend,', element);
});

for (element of friends) {
    console.log('Hello Friend,', element);
}

let employee = {
    name: "Vishal",
    salary: 1000,
    website: "Github"
}

// Use this loop to iterate over objetcs in JavaScript
for (key in employee) {
    console.log(`The ${key} of the employee is ${employee[key]}`);
}

// while loop in JS
let i = 0;
while (i < 4) {
    console.log(`${i} is less than 4`);
    i++;
}

// Do while Loop in JS 
let j = 0;
do {
    console.log(`${j} is less than 4`);
    j++;
} while (j < 4);