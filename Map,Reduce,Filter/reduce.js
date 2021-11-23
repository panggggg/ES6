const add = (x, y) => x + y
const input = [1, 2, 3, 4, 5]
const initial = 0
let output = initial
for(let i=0; i < input.length; i++){
    console.log(`${output} + ${input[i]}`)
    output = add(output, input[i])
    console.log(`= ${output} `)
} 
console.log(output) //output -> 15



//functional 
const add = (x, y) => x + y
const input = [1, 2, 3, 4, 5]
const output = input.reduce(add, 0) // reduce(cur, acc)
console.log(output) //output -> 15