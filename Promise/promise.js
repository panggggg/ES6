//callback hell
// setTimeout(() => {
//     console.log('One');
//     setTimeout(() => {
//         console.log('Two');
//         setTimeout(() => {
//             console.log('Three');
//             setTimeout(() => {
//                 console.log('Four');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

//1.
const one = new Promise((resolve) => {
    setTimeout(() => {
        resolve('one')
    }, 1000)
})
const two = new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, 3000)
})
const three = new Promise((resolve) => {
    setTimeout(() => {
        resolve()
    }, 5000)
})

one
.then((resolve) => {
    console.log(resolve)
    two
    .then(() => {
        console.log('two')
        three
        .then(() => {
            console.log('three')
        })
    })
})

////////////////////////////////////////////////////////////////////

number = 2
const evenNumber = new Promise((resolve, reject) => {
    if(number % 2 === 0){
        resolve(`${number} is an even number`)
    } else {
        reject(`${number} is not an even number`)
    }
})

evenNumber
    .then((resolve) => {
        console.log(resolve)
    })
    .catch(reject => {
        console.log(reject)
    })

/////////////////////////////////////////////////////////////////////

function waitForThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('ผ่านไป 3 วินาที'))
        }, 3000)
    })
}

function waitForFiveSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('ผ่านไป 5 วินาที'))
        }, 5000)
    })
}

function waitForTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const msg = 'ผ่านไป 2 วินาที'
            resolve(msg)
        }, 2000)
    })
}


waitForThreeSecond()
    .then((resolve) => {
        waitForFiveSecond()
            .then((resolve) => {
                waitForTwoSecond()
                    .then((resolve) => {
                        console.log(resolve)
                    })
            })
    })