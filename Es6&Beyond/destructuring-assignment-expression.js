var o = { a:1, b:2, c:3}, a, b, c, p;

p = {a, b, c} = o;

console.log(a, b, c);      // 1 2 3
p === o;    // true

//------------------------------

var o = [1,2,3], a, b, c, p;

p = [a,b,c] = o;

console.log(a, b, c);   // 1 2 3
p === o;    // true


// ------------------------------

var o = {a:1, b:2, c:3 }, 
    p = [4,5,6]
    a, b, c, x, y, z;

({a} = {b,c} = o);
[x,y] = [z] = p;

console.log(a, b, c);   // 1 2 3
console.log(x, y, z);   // 4 5 4

// -------------------------------

var [,b] = foo();
var { x, z } = bar();

console.log(b, x, z);   // 2 4 6

//---------------------------------

var[ ,,c,d ] = foo();
var { w, z } = bar();

console.log(c, z);      // 3 6
console.log( d, w);     // undefined undefined

// ---------------------------------

var a = [2,3,4];
var b = [1, ...a, 5];

console.log( b );   // [1,2,3,4,5]

// ----------------------------------

var a = [2,3,4];
var [b, ...c] = a;

console.log( b,c );     // 2 [3,4]
