//Normal Function
// function sum(a, b)
// {
// return a+b;
// }

// Arrow Function
// let sum = (a, b) =>{
// return a+b;
// }

// More efficient
let sum = (a, b) => a + b;

// You can remove () if you have only one argument.
let half = a => a / 2;

let obj = {
    greeting: "Good Morning",
    names: ['Vishal', 'Kunal', 'Harsh'],
    speak() {
        // Here if we dont use arrow function then it will show undifined
        // Because In => function this show element of its parent.
        // But if use normal, then this show block element.
        this.names.forEach((student) => {
            console.log(this.greeting + " Kukdoo koo " + student);
        });
    }
}
obj.speak();