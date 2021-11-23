//1.
//Global Scope
var fruit = "banana"
console.log(fruit) //output -> banana

function getFruit(){
    console.log(fruit) //output -> banana
}

getFruit()




//2.
//Local Scope -> Function scope, Block scope


//Function Scope (var)
function getFruit(){
    var fruit = "apple"
    console.log(`inside function: ${fruit}`)
}
getFruit() //output -> inside function: apple
console.log(fruit) //output -> fruit is not defined


//Block Scope (const, let) {}
function getFruit(){
    if(true){
        var fruit1 = "apple"
        let fruit2 = "banana"
        const fruit3 = "melon"
    }
    console.log(fruit1) //output -> apple
    console.log(fruit2) //output -> fruit2 is not defined
    console.log(fruit3) //output -> fruit3 is not defined
}
getFruit()