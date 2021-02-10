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
console.log(x, y, z);   // 4 5 6