class MyClass {
    constructor(name, age){
        this.name = name
        MyClass.age = age
    }
    //class method
    getName(){
        return `My name is ${MyClass.name}`
    }
}

const result = new MyClass('Pawornwan', 21)
console.log(result.getName()) 


//Public class fields and methods
class Car{
    //public class fields don't use 'this' 
    numOfWheels = 4
    fuelType = 'electric'

    startEngine(){
        return 'Engine is running'
    }
}

const toyota = new Car()
console.log(toyota.fuelType)
console.log(toyota.startEngine())
