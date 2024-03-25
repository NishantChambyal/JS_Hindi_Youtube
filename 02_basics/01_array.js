// Array

const myArr = [0,1,2,3,4,5,6,true,"nishant"] // elements in array[]

const myHeros = ["shaktiman", "nagraaj"]

const myArr2 = new Array(1,2,3,4,5)

console.log(myArr[2]);

//methods of array[]


// myArr.push(6) // add 6 at last of array
// myArr.push(7) 
// myArr.pop() // pop the laast value of array (dlt)

// myArr.unshift(9) // insert 9 at starting

// myArr.shift() // remove the fist element of array[]

// console.log(myArr.includes(9)); // questioner methods of array
// console.log(myArr.indexOf(9)); // returns -1 because 9 is note present in array[] 

// const newArr = myArr.join() // this join method bind the array and change the data type of array to string

// console.log(myArr);
// console.log(newArr);



/***************** slice or splice Method in array ********************/

console.log("A", myArr);

const myn1 = myArr.slice(1,3) // make coppy of array  not menupulate the original reference of of array

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) // menupulate the original array and trim the the part which range is given in method
console.log("C", myArr);
console.log(myn2);