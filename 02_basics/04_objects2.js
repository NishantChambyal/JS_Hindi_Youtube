// const tinderUser = new Object(); //singleton object

const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false



// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "hitesh",
            lastName: "choudhary"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName.lastName);
const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "a", 4: "b" }
const obj4 = {5: "a", 6: "b" }

// const obj3 ={obj1 , obj2};

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign( {}, obj1, obj2, obj4) // {empty} this means it is a target and var is source of this target

const obj3 = {...obj1,...obj2,...obj4}  // 90% use case (spread method)

// console.log(obj3)


const users = [
    {
        id: 1,
        email: "something@mail.cpm"
    },
    {
        id: 1,
        email: "something@mail.cpm"
    },
    {
        id: 1,
        email: "something@mail.cpm"
    },
    {
        id: 1,
        email: "something@mail.cpm"
    },
    {
        id: 1,
        email: "something@mail.cpm"
    },
    {
        id: 1,
        email: "something@mail.cpm"
    },
]

console.log(users[1].email)

console.log(tinderUser); // object key value pair

console.log(Object.keys(tinderUser));  // returns in [] array
console.log(Object.values(tinderUser));  // returns in [] array
console.log(Object.entries(tinderUser));  // returns key and value pairs in [] array inside a parent [] array


console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // true


//++++++++++++++++++++++++++++++ object API talks +++++++++++++++++++++++++++

// destructor of array

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// course.courseInstructor
// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

console.log(instructor);


// const navbar = () => {

// }

// {
//     name: "hitesh",
//     coursename: "js in hindi",     // This is json {object}
//     price: "free"
// } 

 [
    {},
    {},
    {},
    {}
 ]

