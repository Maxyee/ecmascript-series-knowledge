// Javascript Array Of method......

//ES5
let numbers = new Array(2)
console.log(numbers.length)  // output 2
console.log(numbers[0]) // output undefined


numbers = new Array("2")
console.log(numbers.length) // 1
console.log(numbers[0])  // "2"


//This behavior is sometimes confusing and error-prone because we do not know 
//the type of data that we pass to the Array constructor.


//Now ES6 with Array.of
let numbers = Array.of(3)
console.log(numbers.length) // 1
console.log(numbers[0])  // 3


let chars = Array.of('A', 'B', 'C')
console.log(chars.length)  // 3
console.log(chars)  // ['A', 'B', 'C']






