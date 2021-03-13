// concise properties
var x = 2, y = 3,
o = {
    x: x,
    y: y
};

// if it lexical identifier then we can write in this way
var x = 2, y = 3,
o = {
    x,
    y
}


// concise methods
// old way

var o = {
    x: function(){
        //....
    },
    y: function(){
        //....
    }
}

// new way

var o = {
    x(){
        //...
    },
    y(){
        //.....
    }
}

// new way for generators
var o = {
    *foo(){
        //.....
    }
}
