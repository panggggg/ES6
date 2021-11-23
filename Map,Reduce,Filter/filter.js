const isEven = x => x % 2 === 0
const input = [1, 2, 3, 4, 5]
const output = []
for(let i=0; i<input.length; i++){
    if(isEven(input[i])){
        output.push(input[i])
    }
}
console.log(output) //output -> [2, 4]


//functional

const isEven = x => x % 2 === 0
const input = [1, 2, 3, 4, 5]
const output = input.filter(isEven)
console.log(output) //output -> [2, 4]


const output = input.filter(x => x%2 === 0)
console.log(output)