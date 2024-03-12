let score = 33

console.log(typeof score);
console.log(typeof (score));  // same check method

let valueInNumber = Number (score)

console.log(typeof valueInNumber);


// "33" => 33 
// "33abc" => NaN (not a Number but type "33abc" is number)
// true => 1 & false => 0 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// " " => false
// "Nishant" => true

let someNumber = 33 
let stringNumber = String (someNumber) // 33 is number but now it is converted into "33" type of 33 is now string

console.log(stringNumber);

// ************************* Operations ***********************

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = "nishant"

let str3 = str1 + str2

console.log(str3);

console.log("1" + 2);  // 12 output
console.log(1 + "2"); // 12 output
console.log("1" + 2 + 2); // 122 output  (because it is treated as string)
console.log(1 + 2 + "2"); // 32 output (because it is treated as number)

console.log((3 + 4) * 5 % 3);

console.log(+true); // 1 output
console.log(+""); // 0 output

let num1 , num2 , num3 

num1 = num2= num3 = 2 + 2 // smart way to define variables but not recomended to code like this because of readability

let gameCounter = 100
gameCounter++;  // post increment
console.log(gameCounter);
