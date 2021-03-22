var o1 = {
    //....
};

var o2 = {
    __proto__: o1,
    //....
};

// For setting the [[Prototype]].....
var o1 = {
    //...
};

var o2 = {
    //....
};

Object.setPrototypeOf(o2, o1);