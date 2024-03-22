const name = "nishant"
const repocount =  50

// console.log(name + repocount + "Value"); // THIS IS OLD METHOD TO CONCATINATE THE STRING

console.log(`Hello my name is ${name} and this is my repocunt ${repocount}`); // THIS IS THE MODERN WAY TO WRITE

const gameName = new String("nishant-hc-com")

console.log(gameName[0]);
console.log(gameName.__proto__);


// strings Methods

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   nishant    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nishant.com/nishant%20chambyal"

console.log(url.replace('%20', '$'));

console.log(url.includes('nishant'));

console.log(gameName.split('-'));

