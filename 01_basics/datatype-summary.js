// # Primitive 

// 7 types :  string , number, boolean, null , undefined , symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 98746264954654n



// Reference (Non Primitive)

// Array, Object, Functions

const heros = ["shaktiman", "nagraj", "doga"]

let myObj = {
    name: "nishant",
    age: 22
}

const myFunction = function (){
    console.log("hello world")

}

console.log(typeof bigNumber);  // symbol


//****************************************************************


let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "nishant@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);