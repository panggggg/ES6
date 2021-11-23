//1.
//let is block scope
let foo = 123
console.log(foo) //output -> 123
{
    let foo = 456
    console.log(foo) //output -> 456
}
let foo = 234
console.log(foo) //output -> 123

