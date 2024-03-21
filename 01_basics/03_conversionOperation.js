// let score = 33
// let score = "33abc" //Not a number NaN
// let score = null  // value of null is zero after convert into number
// let score = undefine // return NaN after convert into Number
// let score = true // return 1  if true
// let score = false // return 0  if false
// let score = "string" // NaN
let score = "33"

console.log(typeof(score));  // both are same
console.log(typeof score);

let valueInNumber = Number(score)  // score var is now converted into number

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// "33abc" => NaN        but type is Number
// true => 1 ;  false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true ;  0 => false
// "" => false
// "Nishant" => true

let someNumber = 33 
let StringNumber = String(someNumber)
console.log(typeof StringNumber);
console.log(StringNumber);