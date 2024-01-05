const account_id = 144553
let account_email = "nishant@hotmail.com"
var account_password = "12365"
account_city = "Shimla"
var account_state;

// account_id= 4545 Not allowed
 
account_email = "nothing@hotmail.com"
account_password = "54545"
account_city = "delhi"
 
/*
Do not to use var
because issue in block scope and function scope
*/

console.log(account_id);
console.table([account_id, account_email, account_password,account_city, account_state])