// ES5
var prefix = "user_";

var o = {
    baz: function(){
        // ....   
    }
};

o[ prefix + "foo" ] = function(){ 
    // .....
}

o[ prefix + "bar" ] = function(){
    //.....
}


//ES6
var prefix = "user_";

var o = {
    baz: function(){
        //....
    },
    [ prefix + "foo" ]: function(){
        //.....
    },
    [ prefix + "bar" ]: function(){
        //.....
    }
};


// most computed property name will be Symbol

var o = {
    [Symbol.toStringTag]: "really cool thing",
};

// .................................................

var o = {
    [ "f" + "oo" ](){
        //.....    // computed concise method
    },
    *["b" + "ar"](){
        //....      // computed concise generator
    }
};