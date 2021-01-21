function foo(x,y,z){
    console.log(x,y,z);
}

foo(...[1,2,3])   /// 1 2 3

foo.apply(null, [1,2,3])    /// 1 2 3

//--------------------------

var a = [2,3,4]
var b = [1, ...a, 5]

console.log(b)     /// [1,2,3,4,5]


//--------------------------
function foo(x,y, ...z){
    console.log(x,y,z)
}

foo(1,2,3,4,5)  // 1 2 [3,4,5]

//---------------------------
function foo(...args){
    args.shift();
    console.log(...args)
}

//---------------------------
function bar(){
    var args = Array.prototype.slice.call( arguments );
    args.push(4,5)

    args = args.filter(function(v){
        return v % 2 == 0;
    })

    foo.apply(null, args)
}

bar(0,1,2,3);

