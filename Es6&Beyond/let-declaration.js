var a = 2;

{
    let a = 3;
    console.log(a) // print 3
}

console.log(a)  // print 2


//IMPICIT NATURE OF let
let a = 2

if(a > 1){
    let b = a * 3
    console.log(b) // output 6

    for(let i=a; i<=b; i++){
        let j = i + 10
        console.log(j)
    }
    // 12 13 14 15 16

    let c = a + b;
    console.log(c);   // output 8
}


//type of behaves::::
{
    if(typeof a === "undefined"){
        console.log("cool")
    }

    if(typeof b === "undefined"){   // ReferenceError!
        // ....
    }

    // .....

    let b;
}