const accountId = 4569;
let accountEmail = "Nishant@gmail.com"
var accountPassword = "123456"
accountcity = "shimla"

let accountState;  //undefined

// accountId = 4545 not change because const is declare
console.log(accountId);

accountEmail = "hchc@gmail.com"
accountPassword = "212121212121"
accountcity = "dharamshala"

console.table([accountId,accountEmail, accountPassword , accountcity, accountState])

/* 
prefer not to use var because of issue in block scope and function
*/