function foo(x) {
    console.log( x );
}

foo( 42 );

//-----------------------------

function foo([x, y]){
    console.log(x, y);
}

foo([1, 2]);    // 1 2
foo([ 1 ]);     // 1 undefined
foo( [] );      // undefined undefined

//------------------------------

function foo( {x, y} ){
    console.log(x, y);
}

foo({ y: 1, x: 2 } );   // 2 1
foo({ y: 42 });         // undefined 42
foo( {} );              // undefined undefined

//--------------------------------------
