var o = { a:1, b:2, c:3}, a, b, c, p;

p = {a, b, c} = o;

console.log(a, b, c);      // 1 2 3
p === o;    // true

//------------------------------