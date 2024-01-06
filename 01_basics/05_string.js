const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('nishant~hc~com')

console.log(gameName[0])
console.log(gameName.__proto__)



console.log(gameName.length);
console.log(gameName.toLocaleUpperCase);
console.log(gameName.charAt(2))
// consol.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, -5)
console.log(newString);


const newStringOne = "   nishant   "
console.log(newStringOne);
console.log(newString.trim());

const url = "https://nishant.com/nishant%20chambyal"
console.log(url.replace( "%20", "-" ));

console.log(url.includes("nishant"))

console.log(gameName.split("~"))

