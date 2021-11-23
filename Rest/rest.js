//default param
//1.
function sayHello(msg = 'Hello World'){
    console.log(msg)
}

sayHello() //output -> Hello World
sayHello('Hi') //output -> Hi

//2.
function add(x, y){
    console.log(x + y)
}
add(100, 200) //output -> 300

/////////////////////////////////////////////////////

//rest รับ params ตัวสุดท้ายแบบไม่จำกัดจำนวน ตัวสุดท้าย!!!
//1.
const sumfunc = (...nums) => { //nums is array
    return nums
}
const getName = name => name
console.log(sumfunc(2, 3, 1, 10, {a:4}, getName)) //output -> [ 2, 3, 1, 10, 4, {a:4}, [Function: getName] ]


//2.
const employee = (name, ...titles) => {
    console.log(titles) //[ 'web developer', 'docter', 'artist' ]
    return personTitles = `${name} is a ${titles[0]}, 
                        ${titles[1]} and ${titles[2]}`
    
}
console.log(employee('John', 'web developer', 'docter', 'artist'))
//output -> John is a web developer, docter and artist