var animals = [
    { name: 'evelyn', species: 'rabbit' },
    { name: 'frank', species: 'dog' },
    { name: 'kelvin', species: 'dog' },
    { name: 'melody', species: 'fish' },
    { name: 'joan', species: 'cat' },
    { name: 'jimmy', species: 'fish' }
]
//------------------------------USING A FOR LOOP------------------------------//

/*
var dogs = []
for (i = 0; i < animals.length; i++) {
    if (animals[i].species == 'dog') {
        dogs.push(animals[i])
    }
}
*/

//------------------------------USING FILTER FUNCTION------------------------------//

/*
  var dogs = animals.filter(function(a){
    return a.species === 'dog'
  })
*/

/*
  var isDog = function(a) {
      return a.species === 'dog'
  }
  var dogs = animals.filter(isDog)
*/


  var notDog = function(b){
      return b.species !== 'dog'
  }
  var otherAnimals = animals.filter(notDog)

  console.log(otherAnimals)

