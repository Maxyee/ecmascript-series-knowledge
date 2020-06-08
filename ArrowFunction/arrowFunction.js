//------------------------One parameter-------------------------
//old way
var lordify = function(firstname){
    return `${firstname} of Canterbury` 
}
console.log(lordify("Dale"))
console.log(lordify("Daryle"))

//new way
var lordifynew = firstname => `${firstname} of Canterbury` 
console.log(lordifynew("DaleArrow"))
console.log(lordifynew("DaryleArrow"))
//---------------------------------------------------------------


//------------------------No parameter-------------------------
//old way
var lordify = function(){
    return `Dale of Canterbury` 
}
console.log(lordify())
//console.log(lordify("Daryle"))

//new way
var lordifynew = firstname => `DaleArrow of Canterbury` 
console.log(lordifynew())

//---------------------------------------------------------------




//------------------------Two parameter-------------------------
//old way
var lordify = function(firstname, land){
    return `${firstname} of ${land}` 
}
console.log(lordify("Dale","Maryland"))
console.log(lordify("Daryle","Culpeper"))

//new way
var lordifynew = (firstname, land) => `${firstname} of ${land}` 
console.log(lordifynew("DaleArrow","Maryland"))
console.log(lordifynew("DaryleArrow","Culpeper"))
//---------------------------------------------------------------`


//------------------------Function Error Checking----------------
//old way
var lordify = function(firstname, land){
    if(!firstname){
        throw new Error('A firstname is required to lordify')
    }

    if(!land){
        throw new Error('A land is required to lordify')
    }

    return `${firstname} of ${land}` 
}
console.log(lordify("Dale","Maryland"))
console.log(lordify("Daryle"))

//new way
var lordifynew = (firstname,land) => {
    if(!firstname){
        throw new Error('A firstname is required to lordify')
    }

    if(!land){
        throw new Error('A land is required to lordify')
    }

    return `${firstname} of ${land}`
} 
console.log(lordifynew("DaleArrow","Maryland"))
console.log(lordifynew("DaryleArrow"))
//---------------------------------------------------------------`


//-------------Arrow Function Do Not Block (this)----------------
//old way do not support (this)
var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar",],
    print: function(delay=1000){
        
        setTimeout(function(){
            console.log(this.resorts.join(","))
        },delay)
    }
}

tahoe.print()

//new way support (this)
var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar",],
    print:function(delay=1000){

        setTimeout(()=> {
            console.log(this.resorts.join(","))
        },delay)
    }
}
tahoe.print()

// if we change the print object with arrow function calling it will not work for (this)
var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar",],
    print:(delay = 1000) => {   
        
        setTimeout(() => {
            console.log(this.resorts.join(","))  //error cannot read property resorts
        }, delay)
    }
}
tahoe.print()


//now for fixing previous code

var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar",],
    print:(delay = 1000) => {    
        
        setTimeout(() => {
            console.log(this === window)
        }, delay)
    }
}
tahoe.print()

// now cloning pervious uppor code 
// and use the normal function again into print object
// it will through error
var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar",],
    print:function(delay = 1000){    
        
        setTimeout(() => {
            console.log(this === window)
        }, delay)
    }
}
tahoe.print()  // false

//---------------------------------------------------------------`