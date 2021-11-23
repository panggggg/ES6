//1. Object constructor syntax
let obj1 = new Object()

//2. Object literal syntax ***
let obj2 = {}


//3. การเข้าถึง Object
let person = {
    firstname: 'Pawornwan',
    lastname: 'Sriprathung',
    age: 21
}

//3.1 Dot Notation
console.log(person.firstname)

//3.2 Bracket Notation
console.log(person['firstname'])


//4. usecase -> convert number to text

// const number = 3
// const convertToText = number => {
//     if(number === 1){
//         return 'one'
//     }
//     if(number === 2){
//         return 'two'
//     }
//     if(number === 3){
//         return 'three'
//     }
// }
// const result = convertToText(number)
// console.log(result)

const number = 3
const convertToText = number => {
    const nums = {1: 'one', 2: 'two', 3: 'three'}
    return nums[number]
}
const result = convertToText(number)
console.log(result)

