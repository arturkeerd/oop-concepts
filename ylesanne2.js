class Person {
    constructor(){
        this.firstname = ""
        this.lastname = ""
        this.age = 0
    }
}
class Student{
    constructor(firstname, lastname, age) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
}
const person1 = new Person ()
person1.firstname = 'John'
person1.lastname = 'Doe'
person1.age = '1'
console.log(person1)

const person2 = new Person ()
person2.firstname = 'Mari'
person2.lastname = 'Narva'
person2.age = '2'
console.log(person2)

const person3 = new Person ()
person3.firstname = 'Juss'
person3.lastname = 'Juhan'
person3.age = '3'
console.log(person3)