"use strict";
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}!`);
}
async function getFavoriteNumber() {
    const prom = new Promise((reslove) => {
        reslove(25);
    });
    return prom;
}
greet("Brendan", 67);
getFavoriteNumber().then((value) => {
    console.log(value);
});
class User {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}
const user = new User("Manoja", 17);
console.log(user);
const obj1 = { hello: "Some" };
let name1 = "Ok";
let name2 = "Hello";
console.log(obj1.hello);
// This won't throw Error
// obj1.ok();
// obj1();
