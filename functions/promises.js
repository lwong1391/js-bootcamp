// callback
const getDataCallback = (callback) => {   
    setTimeout(() => {
        callback(undefined, 'This is the data')
    }, 2000)
}


getDataCallback((err, data) => {
    if (err) {

    } else {
        console.log(data)
    }
})

// Promise
const getDataPromise = (data) => new Promise((resolve, reject) => {   
    setTimeout(() => {
        resolve(`This is the data from promise: ${data}`)
        // reject('This is the promise error')
    }, 2000)
}) 

myPromise = getDataPromise(123)
myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})