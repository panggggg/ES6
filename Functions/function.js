//declaration syntax
//notice: มีคำว่า function ข้างหน้า
function add(number1, number2){
    console.log(number1 + number2)
}
add(5, 5)


//expression syntax
const add = function(number1, number2) {
    console.log(number1 + number2)
}
add(5, 5)

//arrow function
//1.
const sum = (number1, number2) => {
    return number1 + number2
}

//2.
const sum = (number1, number2) => number1 + number2

//3.
const sum = number => number * 5

//4.
const sum = number => ({number}) 
console.log(sum(5)) //output -> { number: 5 }

const sum = number => [number]
console.log(sum(5))