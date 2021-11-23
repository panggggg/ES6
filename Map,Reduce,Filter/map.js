const double = x => x * 2

const input = [1, 2, 3]
const output = []
for(let i=0; i < input.length; i++){
    output.push(double(input[i]))
}
console.log(output) //output -> [ 2, 4, 6 ]



//functional
const double = x => x * 2

const input = [1, 2, 3]
const output = input.map(double)
console.log(output) //output -> [ 2, 4, 6 ]