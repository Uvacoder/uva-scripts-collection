// setTimeout --> Allows us to run the function once after the interval of time
// clearTimeout --> Allows us to run the function repeatedly after the interval of time

function greet(name, byeText) {
    console.log("Hello Good Morning " + name + " " + byeText);
}
timeOut = setTimeout(greet, 5000, "Harry", "Take Care");
console.log(timeOut);

clearTimeout(timeOut);

// setTimeout(greet(), 12000); --> Wrong as it is calling the function inside setTimeout

intervalId = setInterval(greet, 1000, "Harry", "Good Night");
clearInterval(intervalId);

function displayTime() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);