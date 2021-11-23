//copy array
const myArray = ['one', 'two', 'three']
const newArray = [...myArray]
console.log('myArray -> ', myArray) //output -> ['one', 'two', 'three']
console.log('newArray -> ', newArray) //output -> ['one', 'two', 'three']


//merge array
const oddNumber = [1, 3, 5]
const numbers = [2, 4, 6, ...oddNumber]
console.log(numbers) //output -> [ 2, 4, 6, 1, 3, 5 ]


//insert data
const myArr1 = ['JS', 'Python', 'Go']
const myArr2 = ['C', 'Java', ...myArr1, 'C++']
console.log(myArr2) //output -> [ 'C', 'Java', 'JS', 'Python', 'Go', 'C++' ]

/////////////////////////////////////////////////////


//copy object
const myObj = {name: 'pawornwan', age: 21}
const newObj = {...myObj}
console.log('myObj -> ', myObj) //output -> {name: 'pawornwan', age: 21}
console.log('newObj -> ', newObj) //output -> {name: 'pawornwan', age: 21}


//merge object
const obj1 = {name: 'pang', age: 21}
const obj2 = {fname: 'Pawornwan'}
const mergeObj = {...obj1, ...obj2}
console.log(mergeObj) //output -> { name: 'pang', age: 21, fname: 'Pawornwan' }

const obj1 = {name: 'pang', age: 21}
const obj2 = {name: 'Pawornwan'}
const mergeObj = {...obj1, ...obj2}
console.log(mergeObj) //output -> { name: 'Pawornwan', age: 21 }


//insert data
const user = {
    username: 'pang',
    email: 'p.picczy@gmail.com'
}
const detail = {
    firstname: 'pawornwan',
    lastname: 'sriprathung',
    ...user,
    username: 'pangpicc',
    gender: 'female'
}
console.log(detail) // output -> {
                                //     firstname: 'pawornwan',
                                //     lastname: 'sriprathung',
                                //     username: 'pang',
                                //     email: 'p.picczy@gmail.com',
                                //     gender: 'female'
                                // }


const user = {
    username: 'pang',
    email: 'p.picczy@gmail.com'
}
const detail = {
    firstname: 'pawornwan',
    lastname: 'sriprathung',
    ...user,
    username: 'pangpicc',
    username: 'aaaaa',
    gender: 'female'
}
console.log(detail)

///////////////////////////////////////////////////////


//spread with function
const myArr = ['Jack', 'Joe', 'Tony']
function sayNames(name1, name2, name3){
    console.log(`Names you passed are ${name1} ${name2} ${name3}`)
    //output -> Names you passed are Jack Joe Tony 
}
sayNames(...myArr)


//spread with string
const text = 'Sunny day.'
const convertToArr = [...text]
console.log(convertToArr) //output -> [
                                    //     'S', 'u', 'n', 'n',
                                    //     'y', ' ', 'd', 'a',
                                    //     'y', '.'
                                    // ]