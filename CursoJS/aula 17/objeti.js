let amigo = { nome: 'José',
sexo: 'M',
peso: 85.5,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}`)

const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function() {console.log("Hi! I am spongebob!")},
    eat: function() {console.log("I am eating a Krabby Patty.")},
}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey, I'm Patrick..."),
    eat: () => console.log("I'm eating pizza."),
}
console.log(person.firstName)
console.log(person.age)
console.log(firstName)
person.sayHello()
person.eat()
person2.eat()

// this = reference to the object where THIS is used (the object depends on the immediate context) person.name = this.name

// constructor = special method for defining the properties and methods of objects

function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}
const car1 = new Car("Ford", "Mustang", 2024, "red")
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue")

console.log(car1.make)
console.log(car1.model) 
console.log(car1.year)
console.log(car1.color)

console.log(car2.make)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)

car1.drive()

// class = provides a more structured and creaner way to work with objects compared to traditional constructor functions ex: static keyword, encapsulation, inheritance
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
        this.tax = tax
    }
    displayProduct(){
        console.log (`Product: ${this.name}`)
        console.log(`Price: $${this.price.toFixed(2)}`)
    }
    calculatePrice(salesTax){
       return this.price + (this.price * salesTax)
    }
}
const salesTax = 0.05
const product1 = new Product("Shirt", 19.99, 5)
const product2 = new Product("Pants", 22.50, 6)
const product3 = new Product("Underwear", 100.00, 20)

product1.displayProduct()
product2.displayProduct()
product3.displayProduct()

const total = product1.calculatePrice(salesTax)
console.log(`Total price (with tax): ${total.toFixed(2)}`)

// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)

class MathUtil {
    static PI = 3.14159

    static getDiameter(radius){
        return radius * 2
    }
    static getCircumference(radius){
        return 2 * this.PI * radius
    }
    static getArea(radius){
        return this.PI * radius * radius
    }
}
console.log(MathUtil.PI)
console.log(MathUtil.getDiameter(10))
console.log(MathUtil.getCircumference(10))
console.log(MathUtil.getArea(10))

class User{
    static userCount = 0

    constructor(username){
        this.username = username
        User.userCount++
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online.`)
    }
    sayHello(){
        console.log(`Hello, my user name is ${this.username}`)
    }
}
const user1 = new User("Spongebob")
const user2 = new User("Patrick")
user1.sayHello()
console.log(user1.username)
console.log(User.userCount)
User.getUserCount()


// inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child) helps with reusability.
class Animal {
    alive = true
    
    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}
class Rabbit extends Animal {
   static name = "rabbit"

   run(){
    console.log(`This ${this.name} is running.`)
   }
}
class Fish extends Animal {
    name = "fish"
    
    swim(){
        console.log (`This ${this.name} is swimming`)
    }
}
class Hawk extends Animal {
    name = "hawk"
}
const rabbit = new Rabbit()
const fish = new Fish()
const hawk = new Hawk()


rabbit.alive = false
console.log(rabbit.alive)
rabbit.eat()
rabbit.sleep()
rabbit.run()