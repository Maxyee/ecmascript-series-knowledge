function foo(){
    return [1,2,3]
}

var tmp = foo(),
 a = tmp[0], b = tmp[1], c = tmp[2];

 console.log(a,b,c)     // 1,2,3

// ------------------------------

function bar(){
    return {
        x: 4,
        y: 5,
        z: 6
    };
}


var tmp = bar(),
    x = tmp.x, y = tmp.y, z = tmp.z

console.log(x,y,z)  //4,5,6

// -------------------------------

var [ a, b, c] = foo();
var { x: x, y:y, z:z} = bar();

console.log(a,b,c);     //1,2,3
console.log(x,y,z);     //4,5,6