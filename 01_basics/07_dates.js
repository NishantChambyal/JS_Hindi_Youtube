// dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate)

// let myCreateDate = new Date(2024, 0 , 6)
// let myCreateDate = new Date("2024-01-14")
let myCreateDate = new Date("01-7-2024")


// console.log(myCreateDate.toDateString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp)

// console.log(myCreateDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getSeconds());

// `${newDate.getDate()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})
