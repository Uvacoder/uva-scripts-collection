const pets = [
    {
        name: "fido",
        animal: "dog",
        age: 2
    },
    {
        name: "mittens",
        animal: "cat",
        age: 5
    }
]


//forEach now has a new responsibility. It must loop over an array and execute a callback function with the current item in the array. It knows nothing about the custom logic or the contents of the array. It only knows that there is an array, and a function that must be executed for each item in that array.
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++){
        const item = array[i]
        callback(item)
    }
}

function printPet(pet) {
    console.log(`${pet.name} is ${pet.age} years old`)
}

forEach(pets, printPet)

