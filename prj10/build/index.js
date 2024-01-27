"use strict";
;
function paintShape({ shape, xPos, yPos }) {
    // ...
}
function some(x = 100) {
}
const aaa = some();
const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
const myArray = getStringArray();
const secondItem = myArray[1];
function createSquare(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}
let mySquare = createSquare({ colour: "red", width: 100 });
let mySquare1 = createSquare({ color: "red", width: 100 });
let mySquare2 = createSquare({ width: 100, opacity: 0.5 });
