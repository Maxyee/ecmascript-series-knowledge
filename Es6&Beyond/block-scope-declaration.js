var a = 2;

(function IIFE(){
    var a = 3;
    console.log(a) // it will return 3
})();

console.log(a) // it will return 2, because its out side the block
