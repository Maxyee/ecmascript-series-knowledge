function bar(val){
    console.log("bar called!");
    return y + val;
}

function foo(x = y + 3, z = bar( x )){
    console.log(x, z);
}

var y = 5;
foo();          // "bar called"
                // 8 13
foo(10);        // "bar called"
                // 10 15
y = 6;
foo(undefined, 10);    //9 10

// -----------------------------------

var w = 1, z = 2;

function foo(x = w + 1, y = x + 1, z = z + 1){
    console.log(x, y, z)
}

foo();    // reference error


// ----------------------------------

function foo( x = 
        (function(v){ return v + 11; })(31)
    ){
        console.log(x)
}

foo();      // 42


// ----------------------------------

function ajax(url, cb = function(){}){
    //....
}

ajax("http://some.url.1");