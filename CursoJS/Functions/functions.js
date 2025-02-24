const hello = (name, age) => {console.log(`Hello ${name}`)
                        console.log(`You are ${age} years old`)};

hello("Bro", 25);

setTimeout(() => console.log('Hello'), 3000);

var number = [1, 2, 3, 4, 5, 6]
const squares = number.map((element) => Math.pow(element, 2))
const cubes = number.map((element) => Math.pow(element, 3))
const evenNumbs = number.filter((element) => element % 2 === 0)
const oddNumbs = number.filter((element) => element % 2 !== 0)
const total = number.reduce((accumulator, element) => accumulator + element)
console.log(squares)
console.log(cubes)
console.log(evenNumbs)
console.log(oddNumbs)
console.log(total)
var number = [3]

var nam = 'Jessica'
setTimeout(() => console.log(`${nam}, your cubed result is ${cubes}`), 1000)

