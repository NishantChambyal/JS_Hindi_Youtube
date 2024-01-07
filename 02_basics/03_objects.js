//singleton
// object.create

//object literals

const mysm = Symbol("key1")

const jsUser = {
    name: "nishant",
    "full name": "nishant chambyal",
    [mysm]: "mykey1" ,
    age: 24,
    location: "shimla",
    email: "nishant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday","Wednessday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysm]);


jsUser.email = "nishant@hotmail.com";
// Object.freeze(jsUser);
jsUser.email = "nishant@chatgpt.com"

// console,log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user")
}
jsUser.greetingTwo = function(){
    console.log( `hello js user ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
