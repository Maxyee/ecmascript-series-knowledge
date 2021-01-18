function foo(x,y,z){
    console.log(x,y,z);
}

foo(...[1,2,3])   /// 1 2 3

foo.apply(null, [1,2,3])    /// 1 2 3

//--------------------------

var a = [2,3,4]
var b = [1, ...a, 5]

console.log(b)     /// [1,2,3,4,5]

