//1.
//var is function scope
function info(){
    var age = 21
    console.log(age) //output -> 21

    {
        var name = "Pang"
    }

    console.log(name) //output -> Pang
}
// console.log(age) //output -> ReferenceError: age is not defined
// console.log(name) //output -> ReferenceError: name is not defined
info();


//2.
// Hoisting คือ การเลื่อนหรือย้ายตัวแปรไปไว้ส่วนบนสุดของ scope or function


//3.
//var can redeclaration
var name = "Pang"
console.log(name) //output -> Pang
var name = "Pawornwan"
console.log(name) //output -> Pawornwan