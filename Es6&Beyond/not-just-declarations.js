function bar(){
    return{
        x: 4,
        y: 5,
        z: 6
    }
}

function foo(){
    return [1,2,3];
}

var a,b,c,x,y,z;

[a,b,c] = foo();   // 1,2,3
({x,y,z} = bar());  // 4,5,6

//-------------------------------

var o = {};

[o.a, o.b, o.c] = foo();
({ x: o.x, y: o.y, z: o.z} = bar());

console.log(o.a, o.b, o.c); // 1,2,3
console.log(o.x, o.y, o.z); // 4,5,6

// -------------------------------

var which = "x", o = {};

({ [which]: o[which] } = bar());

console.log(o.x);   // 4

// -------------------------------

var o1 = { a:1, b:2, c:3 }, 
    o2 = {};

({a: o2.x, b: o2.y, c: o2.z} = o1);
console.log(o2.x, o2.y, o2.z);  //1,2,3

// ---------------------------------

var o1 = {a: 1, b:2, c:3 },
    a2 = [];

({a: a2[0], b: a2[1], c: a2[2]} = o1)
console.log( a2 );  // [1,2,3]

// ----------------------------------
// swap variables--------------------

var x = 10, y = 20;

[y, x] = [x, y];

console.log(x, y)   // 20 10

