function bar(){
    return{
        x: 4,
        y: 5,
        z: 6
    }
}

var {x, y, z} = bar();
console.log(x,y,z);  // 4,5,6

//----------------------

var { x: bam, y:baz, z: bap} = bar();

console.log(bam, baz, bap); // 4,5,6
console.log(x, y, z) // Reference Error

//-----------------------

var X = 10, Y = 20;

var o = { a: X, b: Y};
console.log(o.a, o.b);  // 10 20

//-----------------------

var aa = 10, bb= 20;

var o = { x: aa, y: bb};
var { x: AA, y: BB} = o;

console.log(AA, BB);    // 10 20