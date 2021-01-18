//for loop with let
var funcs = [];

for(let i = 0; i < 5; i++){
    funcs.push( function(){
        console.log(i)
    })
}

funcs[3]();  // 3


//for loop with var
var funcs = [];

for(var i = 0; i < 5; i++){
    let j = i;
    funcs.push(function(){
        console.log(j)
    })
}

funcs[3]()     // 3
