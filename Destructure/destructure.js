//1. Object destruturing
let user = {
    name: 'Pang',
    email: 'p.picczy@gmail.com'
}
//old
// let name = user.name
// let email = user.email

// const {name, email} = user
const {name: name, email: email} = user
console.log(email)
console.log(name)

/////////////////////////////////////////////

const info = {
    name: 'Pawornwan',
    detail: {
        age: 21,
        gender: 'female'
    }
}

const {name, detail: {age, gender}} = info
console.log(name)
console.log(info.detail)
console.log(age)
console.log(gender)


const a = {x:1, y:2, z:3}
const {x, y, z, w=6} = a
console.log(x, y, z, w)

/////////////////////////////////////////////

let obj2 = {name: "pang", age: 21};
let {name: nickname, age: old} = obj2;
console.log(obj2.name, obj2.age);     
console.log(nickname, old);

/////////////////////////////////////////////
//2. Array destructuring

const arrName = ["pawornwan", "sriprathung"]
const [fname, lname] = arrName
console.log(fname, lname) // pawornwan sriprathung

/////////////////////////////////////////////

const arr = [1, 2, 3]
const [a, b, c, d=5, e=4] = arr
console.log(a, b, c)

// const arr = [1, 2, 3, 4, 5]
// const [a, , ,b , c] = arr
// console.log(a, b, c)

// const arr = [1, 2, 3]
// const [a, b, c, d=5, e=4] = arr
// console.log(a, b, c, d, e)