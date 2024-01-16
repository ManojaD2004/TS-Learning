"use strict";
function isAnimal(pet) {
    return "swim" in pet ? true : "fly" in pet ? true : "bark" in pet;
    // return (pet as Fish).swim !== undefined;
}
let pet = getSmallPet();
if (isAnimal(pet)) {
    pet.swim();
}
else if (isAnimal(pet)) {
    pet.fly();
}
else {
    pet.bark();
}
function multiply(x, y) {
    // You can also use assert
    assert(typeof x === "string");
    assert(typeof y === "number");
    return parseInt(x) * y;
}
const myArray = "string"; // Weird way of declaring types.
const myObj1 = { name: "Hello" };
const testObj = { x: 10, y: "Hello", z: true };
function getProperty(obj, key) {
    return obj[key];
}
const xValue = getProperty(testObj, "x");
// const xValue: number
const yValue = getProperty(testObj, "y");
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            // Throws an Error because any type cannot to assigned to never type
            // const _exhaustiveCheck: never = shape;
            // return _exhaustiveCheck;
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
let someNever = 1;
