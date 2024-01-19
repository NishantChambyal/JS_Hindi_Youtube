function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     // number1 + number2
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,5)

function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result;   
    return number1 + number2
}



const result = addTwoNumbers(5,6);
// console.log("Result:  " , result);




// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("nishant"));


// function loginUserMessage(username = "sam"){

//     // if (username === undefined) {
//     //     console.log("Enter a user name");
//     //     return
//     // }

//     if (!username) {  // (!) this covert true into false and false into true
//         console.log("Enter a user name");
//         return
//     }

//     return `${username} just logged in`
// }

// console.log(loginUserMessage("nishant"));
// console.log(loginUserMessage());



function calculateCartPrice(val1, val2 , ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.username}`);

}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200 , 400 , 500 ,  600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));