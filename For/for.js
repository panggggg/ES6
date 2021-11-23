//forEach -> loop array

const fruits = ['apple', 'banana', 'orange',  'strawberry']
fruits.forEach(fruit => console.log(fruit))
//output ->    apple
            // banana
            // orange
            // strawberry
fruits.forEach((fruit, index, array) => console.log(fruit, index, array))
//output
// fruits => apple
//     index => 0
//     array => apple,banana,orange,strawberry
// fruits => banana
//     index => 1
//     array => apple,banana,orange,strawberry
// fruits => orange
//     index => 2
//     array => apple,banana,orange,strawberry
// fruits => strawberry
//     index => 3
//     array => apple,banana,orange,strawberry

////////////////////////////////////////////////////////////////////////


//for - in -> loop object
//จะได้ key ของ object
const person = {
    name: 'pawornwan sriprathung',
    age: 21,
    gender: 'female'
}
for(let key in person){
    console.log(key) //output -> name
                                // age
                                // gender
    console.log(`${key} => ${person[key]}`)
    //output -> name => pawornwan sriprathung
            // age => 21
            //gender => female
}


//for in - loop array จะได้ค่า index
//key ของ array คือ index
const fruits = ['apple', 'banana', 'orange',  'strawberry']
for (let key in fruits){
    console.log(key) //output -> 0 1 2 3
    console.log(fruits[key])
}


//for of -> สำหรับ loop iterable object(array)
const fruits = ['apple', 'banana', 'orange',  'strawberry']
for(let fruit of fruits){
    console.log(fruit)
    //output -> apple
                // banana
                // orange
                // strawberry
}


const person = {
    name: 'pawornwan sriprathung',
    age: 21,
    gender: 'female'
}
for(let i of person){
    console.log(i) //output -> TypeError: person is not iterable 
    //Iterable คือ object ใดๆ ที่เราสามารถทำการวนซ้ำกับมันได้
}

const text = "Pang"
for(let key of text){
    console.log(key)
}