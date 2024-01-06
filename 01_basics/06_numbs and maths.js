const score = 400
// console.log(score);

const balance = new Number(100)

// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  // positive 4 only

// console.log(Math.round(4.4)); // round figured

// console.log(Math.ceil(4.2));  // top value 5

// console.log(Math.floor(4.9)); // floor value 4

// console.log(Math.min(4,9,2,5)); // minimum value 2

// console.log(Math.max(4.9,5,6,2)); // maximum

console.log(Math.random() );
console.log(Math.floor((Math.random() * 10) +1));


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+ min);