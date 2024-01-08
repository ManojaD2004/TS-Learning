"use strict";
console.log("Hello world");
function padLeft(padding, input) {
    // Nice way to tell function as been not implemented
    throw new Error("Not implemented yet!");
}
const myObj = { ok: "hello" };
const myObj1 = { ok: "hello" };
function padLeft1(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
console.log(padLeft1(12, "Hello"));
const age = Symbol("age");
let ok = "ok";
const myObj2 = { [ok]: "Hello", [age]: 123 };
console.log(myObj2);
console.log(myObj2[ok]);
console.log("See functions written here!!");
function getUsersOnlineMessage(numUsersOnline) {
    // 0
    // NaN
    // "" (the empty string)
    // 0n (the bigint version of zero)
    // null
    // undefined
    // all coerce to false, and other values get coerced to true.
    if (numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
function printAll1(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // "" Gives false, so you're doing no branch for "",
    // if that is ok you can proceed
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function printAll2(strs) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map((x) => x * factor);
    }
}
function example(x, y) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function multiplyValue(container, factor) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
        console.log(container.value);
        // Now we can safely multiply 'container.value'.
        container.value *= factor;
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
function move1(animal) {
    if ("swim" in animal) {
        animal;
    }
    else {
        animal;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
let x = Math.random() < 0.5 ? 10 : "hello world!";
x = 1;
console.log(x);
x = "goodbye!";
console.log(x);
function isFish(pet) {
    return "swim" in pet;
}
console.log(isFish({ fly() {
        null;
    }, }));
