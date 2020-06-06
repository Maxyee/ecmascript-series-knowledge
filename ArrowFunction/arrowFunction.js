//------------------------One parameter-------------------------
//old way
var lordify = function(firstname){
    return `${firstname} of Canterbury` 
}
console.log(lordify("Dale"))
console.log(lordify("Daryle"))

//new way
var lordifynew = firstname => `${firstname} of Canterbury` 
console.log(lordify("DaleArrow"))
console.log(lordify("DaryleArrow"))
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
console.log(lordify())

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
console.log(lordify("DaleArrow","Maryland"))
console.log(lordify("DaryleArrow","Culpeper"))
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
console.log(lordify("DaleArrow","Maryland"))
console.log(lordify("DaryleArrow"))
//---------------------------------------------------------------`


//-------------Arrow Function Do Not Block (this)----------------
//old way
var tahoe = {
    resorts:[],
    print: function(delay=1000){
        
        setTimeout(function(){
            console.log(this.resorts.join(","))
        },delay)
    }
}

tahoe.print()

//new way
var tahoe = {
    resorts:[],
    print:function(delay=1000){

        setTimeout(()=> {
            console.log(this.resorts.join(","))
        },delay)
    }
}
tahoe.print()
//---------------------------------------------------------------`