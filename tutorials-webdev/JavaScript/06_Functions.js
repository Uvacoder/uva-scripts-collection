console.log('Functions In JavaScript');

function greet(name, greetText = 'Welcome to Programming')
{
    console.log(greetText + " " + name);
    console.log(name + 'is a good boy');
}

function sum(a, b, c) 
{
    return a + b + c;
}

greet('Vishal', 'Good Morning');
greet('Harsh', 'Good Evening');

// Default Parameter
greet('Kunal')

// It doesn't return anything so a will undefined
let a = greet('Rohan', 'Good Afternoon');
console.log(a);

a = sum(3, 4, 5);
console.log(a);