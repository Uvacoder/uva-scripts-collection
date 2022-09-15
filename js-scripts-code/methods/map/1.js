var animals = [
    { name: 'evelyn', species: 'rabbit' },
    { name: 'frank', species: 'dog' },
    { name: 'kelvin', species: 'dog' },
    { name: 'melody', species: 'fish' },
    { name: 'duoduo', species: 'cat' },
    { name: 'jessica', species: 'fish' }
]


var names = []

/* FOR LOOP */
// for (var i =0; i < animals.length; i++){
//     names.push(animals[i].name)
// }

/* FOREACH LOOP */
// animals.forEach(animal => {
//     names.push(animal.name)
// })

/* MAP */
// var names = animals.map(function(animal){
//     return animal.name
// })

/* MAP */
var names = animals.map((animal)=>{
    return animal.name + " is a " + animal.species
})

console.log(names)
