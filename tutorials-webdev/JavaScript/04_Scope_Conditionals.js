// Scope of var is global and here you can redeclared varible.(Not recommended)
var a = 35;
var a = 64;

// Scope of let is block and here you can't redeclared varible.(it show error)
// let b = "a";
// let b = "c";

// These below lines doesn't show any error. Because first b is global variable and second b is block varible.
let b = "a";
{
let b = "c";
console.log(b);// Will print c.
}
console.log(b);// Will print a.

// This will show error. We can't change constant varible.
// const s = "This can't be change";
// s = "I am changing constant varible."

// If Conditionals
let age = 34;
if (age > 18)
{
console.log("You cam drink water");
}
else if (age <= 18 && age> 5)
    {
    console.log("You cam drink coffee");
    }
    else
    {
    console.log("You can deink Milk");
    }

    // switch Condtionals
    let day = 'monday';
    switch (day)
    {
    case 'monday':
    console.log('Today is Monday');
    break;
    case 'sunday':
    console.log('Today is Sunday');
    break;
    default:
    console.log('Go to work');
    break;
    }