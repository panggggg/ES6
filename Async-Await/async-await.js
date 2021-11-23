//async -> takes some time, happens in future or not right now
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

const time = async () => {
    try{
        await waitForThreeSecond()
        await waitForFiveSecond()
        const data = await waitForTwoSecond()
        console.log(data)
    } catch (err) {
        console.log(`******ERROR****** ${err}`)
    }
    
}

time()


////////////////////////////////////////////////////////////////

const one = new Promise((resolve) => {
    setTimeout(() => {
        resolve()
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

// one
// .then(() => {
//     console.log('one')
//     two
//     .then(() => {
//         console.log('two')
//         three
//         .then(() => {
//             console.log('three')
//         })
//     })
// })

async function run() {
    await one
    console.log('one')
    await two
    console.log('two')
    await three
    console.log('three')
}
run()