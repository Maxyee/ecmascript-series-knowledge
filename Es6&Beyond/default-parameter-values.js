function foo(x,y){
    x = x || 11;
    y = y || 31;

    console.log(x + y);
}

foo();          // 42
foo(5, 6);      // 11
foo( 5 );       // 36
foo( null, 6);  // 17


//---------------------------------
function foo(x,y){
    x = (x !== undefined) ? x : 11;
    y = (y !== undefined) ? y : 31;

    console.log(x + y)
}

foo(0, 42);        // 42
foo( undefined, 6); // 17

//---------------------------------