function foo(){
    return [1,2,3];
}

function bar(){
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

var [ a = 3, b = 6, c = 9, d = 12] = foo();
var {x = 5, y = 10, z = 15, w = 20 } = bar();

console.log(a, b, c, d);       // 1 2 3 12
console.log(x, y, z, w);       // 4 5 6 20