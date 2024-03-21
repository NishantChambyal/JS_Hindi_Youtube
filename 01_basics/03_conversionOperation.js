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


// ************************** OPERATIONS ********************************

let value = 3 
let negValue =  -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // two square of 3
// console.log(2/2); // divide
// console.log(2%2); // find remainder  (modulas)

let str1 = "hello"
let str2 = " nishant"

let str3 = str1 + str2

console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);  //  output is 122  starting number is string
console.log(1 + 2 + "2");  //  output is 32   starting number is number and 2nd is also a number last one is string because of rules of java script


console.log( (3 + 4) * 5 % 3);


console.log(+true); // return 1 
console.log(true+); // return error
console.log(+"");  // 0
  // do not write code like this

  let num1 , num2 , num3

  num1 = num2 = num3 = 2+2  // dont write code like this


  let gameCounter = 100

  gameCounter++;  // post-fix increment
//   ++gameCounter;  // pre-fix increment
  console.log(gameCounter);