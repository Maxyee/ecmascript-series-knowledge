//In JavaScript, a promise is an object that returns a value which we hope to receive in the future, but not now.


/*
A promise has three states:

Pending: you don’t know if you will complete learning JavaScript by the next month.
Fulfilled: you complete learning JavaScript by the next month.
Rejected: you don’t learn JavaScript at all.

*/

let completed = true

let learnJS = new Promise(function(resolve, reject){
    if(completed){
        resolve('I have completed learning JS')
    }else{
        reject("I haven't completed learning JS yet")
    }
})



// lets making timeout function....

let completed = true

let learnJS = new Promise(function(resolve, reject){
    setTimeout( () => {
        if(completed) {
            resolve("I have completed learning JS.")
        }
        else{
            reject("I haven't completed learning JS yet.")
        }
    }, 3 * 1000)
})


// Following function returns Promise object
function makePromise(completed){
    return new Promise(function(resolve, reject){
        setTimeout(()=> {
            if(completed) {
                resolve("I have completed learning JS.")
            }
            else{
                reject("I haven't completed learning JS yet.")
            }
        }, 3 * 1000)
    })
}

let learnJS = makePromise(true)

learnJS.then(
    success => console.log(success),
    reason => console.log(reason)
)

learnJS.then(
    value => console.log(value)
)


let masterJS = makePromise(false)

masterJS.then(
    undefined,
    reason => console.log(reason)
)

learnJS.catch(
    reason => console.log(reason)
)


// usage of Promise in real API logic

function load(url){
    return new Promise(function(resolve, reject){
        const request = new XMLHttpRequest()

        request.onreadystatechange = function(e) {
            if(this.readyState === 4){
                if(this.status == 200){
                    resolve(this.response)
                }else{
                    reject(this.status)
                }
            }
        }

        request.open('GET', url, true)
        request.send()
    })
}


// now calling the promise using button click from API section
const btn = document.querySelector('#btnGet')
const msg = document.querySelector('#message')

btn.onclick = function(){
    load('https://www.javascripttutorial.net/sample/promise/api.json')
        .then(
            response => {
                const result = JSON.parse(response)
                msg.innerHTML = result.message
            },
            error => msg.innerHTML = `Error getting the message, HTTP status: ${error}`
        )
}