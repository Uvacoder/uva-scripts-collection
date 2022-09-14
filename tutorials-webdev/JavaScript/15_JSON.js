let jsonObj = {
    name: "Vishal",
    channel: "sahdsknd",
    friend: "Obama",
    food: "Samose"
}
console.log(jsonObj);
let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);

myJsonStr = myJsonStr.replace('Vishal','Anand');
console.log(myJsonStr);

newJsonObj = JSON.parse(myJsonStr);
console.log(myJsonObj);