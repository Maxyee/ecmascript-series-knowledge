// previously there is no official classes in javascript

// we had to define our object in a funciton
function Vacation(destination, length){
    this.destination = destination
    this.length = length
}

//then we had to call that function for using those objects
Vacation.prototype.print = function(){
    console.log(this.destination + " | " + this.length + "days" )
}

var maui = new Vacation("Maui", 7)

maui.print()


//new way class defination
class Vacationclass {

    constructor(destination, length){
        this.destination = destination
        this.length = length
    }

    print(){
        console.log(`${this.destination} will take ${this.length}`)
    }
}

const trip = new Vacationclass("Budapest", 10)
console.log(trip.print())


//Lets Inherit the Vacationclass 
class Expedition extends Vacationclass {
    
    constructor(destination,length, gear){
        super(destination,length)
        this.gear = gear
    }

    print(){
        super.print()
        console.log(`Bring your ${this.gear.join(" and your ")}`)
    }
}

const trip2 = new Expedition("Manhatten", 3, ["sunglassess", "prayer flags", "camera"])
trip2.print()