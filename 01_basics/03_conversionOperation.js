let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => true; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false;
// "hitesh" => true


let somenumber = 33

let  stringNumber = String(somenumber);

console.log(stringNumber);
console.log( typeof stringNumber);


//******************************** OPERATIONS *****************************//

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 = " nishant"

let str3 = str1 + str2  // concatination

console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3)

console.log(+true);
console.log(+"");


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100

gameCounter++; //post increment
++gameCounter; //pre  increment

console.log(gameCounter)