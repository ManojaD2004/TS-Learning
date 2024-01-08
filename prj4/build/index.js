"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
let number2 = (0, function_1.getNumber)();
console.log((0, function_1.getNumber)(), number2);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var E;
(function (E) {
    E[E["A"] = (0, function_1.getNumber)()] = "A";
    E[E["B"] = (0, function_1.getNumber)()] = "B";
})(E || (E = {}));
function displayDir(param1) {
    console.log(param1);
}
console.log(E, Direction);
displayDir(Direction.Up);
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function f(obj) {
    console.log(obj.X);
}
// Works, since 'E' has a property named 'X' which is a number.
f(E);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log("Log level key is:", key);
        console.log("Log level value is:", num);
        console.log("Log level message is:", message);
    }
}
printImportant("ERROR", "This is a message");
// Compiler won't compile const enum
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
console.log(0 /* EDirection.Up */);
ODirection.Up;
function MyFuntion(val) {
    return (parm) => 10;
}
console.log(MyFuntion()());
const obj1 = { Right: 1 };
// Using the enum as a parameter
function walk(dir) { }
function run(dir) { }
walk(2 /* EDirection.Left */);
run({ ...ODirection });
run({ ...obj1 }); // Make TypeScript fool
