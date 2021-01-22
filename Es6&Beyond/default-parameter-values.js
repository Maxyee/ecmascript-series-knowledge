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
function foo(x,y){
    x = (0 in arguments ) ? x : 11;
    y = (1 in arguments ) ? y : 31;

    console.log( x + y )
}

foo(5);                 // 36
foo(5, undefined);      // NaN

//----------------------------------
function foo(x = 11, y = 31){
    console.log( x + y )
}

foo();          //42
foo(5, 6);      //11
foo(0, 42);     //42

foo( 5 );       //36
foo(5, undefined);  // 36 <---- `undefined is missing`
foo(5, null);   //5 <---- null coerces to '0'

foo(undefined, 6);  //17 <----- `undefined` is missing
foo(null, 6);       //6 <------ null coerces to '0'