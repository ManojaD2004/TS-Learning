"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
console.log("Objects, Interface, Types, etc.!");
console.log((0, function_1.getNumber)());
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
function printName(obj) {
    // Error - might crash if 'obj.last' wasn't provided!
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}
printName({ first: "Iron" });
printName({ first: "Iron", last: "Man" });
function printId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
// OK
printId(101);
// OK
printId("202");
// Error
//    printId({ myID: 22342 });
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople(["John", "Tony"]);
// Return type is inferred as number[] | string
function getFirstThree(x) {
    return x.slice(0, 3);
}
// Exactly the same as the earlier example
function printCoord1(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord1({ x: 100, y: 100 });
function sanitizeInput(str) {
    return str;
}
// Create a sanitized input
let userInput = sanitizeInput("Hello");
// Can still be re-assigned with a string though
userInput = "new input";
function printCoord2(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord2({ y: 100, x: 100 });
const bear = { name: "Hello", honey: true };
console.log(bear.name, bear.honey);
const bear1 = { name: "Hello1", honey: true };
console.log(bear1.name, bear1.honey);
const src = { title: "Window", ts: "v2023" };
console.log(src);
const myCanvas = { value: 10 };
const myCanvas1 = { value: 10 };
const numsNumber = [12, 12, "12"];
console.log(numsNumber);
let newCanva = 123456789;
let randNum1 = (0, function_1.getNumber)();
console.log(myCanvas);
console.log(newCanva.toString()); // Type Script is Weird
console.log(randNum1.toString());
// let randNum: string = getNumber();
// console.log(randNum.toUpperCase());
// This gives Type Error at Runtime
let x = "hello";
// OK
x = "hello";
// ... Error
// x = "howdy";
function liveDangerously(x) {
    // No error
    // Neglect null or undefined
    console.log(x.toFixed());
}
liveDangerously(69000);
// Creating a bigint via the BigInt function
const oneHundred = BigInt(100);
// Creating a BigInt via the literal syntax
const anotherHundred = 100n;
console.log(oneHundred + anotherHundred);
const firstName = Symbol("name");
const secondName = Symbol("name");
const thirdName = "Hello";
const objName = {
    [firstName]: "Hello",
    [secondName]: "World",
    [thirdName]: "!",
};
console.log(typeof firstName);
console.log(objName);
function convertString(num) {
    return num + " Hello";
}
const string1 = convertString("Hello");
console.log(string1);
// declare function handleRequest(url: string, method: "GET" | "POST"): void;
// const req = { url: "https://example.com", method: <"GET" | "POST"> "GET" };
// handleRequest(req.url, req.method);
