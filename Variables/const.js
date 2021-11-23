//1.const is constant the value cannot be change
const a = 3
console.log(a) // output -> 3
{
    const a = 2
    console.log(a) // output -> 2
}
a = 6
console.log(a) // output -> TypeError: Assignment to constant variable.

//2.
//const is block-scpoe
const name = "Pawornwan"
{
    const name = "Pang"
    console.log(name)
}
console.log(name)

//3.
// const with object
const foo = { bar: 123 }
console.log(foo) //output -> { bar: 123 }
foo = { bar: 456 }
console.log(foo) //output -> TypeError: Assignment to constant variable.

//แก้ไขค่าใน obj
foo.bar = 456
console.log(foo) //output -> { bar: 456 }

const arr = [1, 2, 3, 4]
// arr = [5, 6, 7, 8]
arr[0] = 10
console.log(arr)