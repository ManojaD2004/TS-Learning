"use strict";
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);
function len(x, m) {
    return x.length;
}
len([1, 2, 3], 4);
len(["1", "2", "3"]);
//len(["a",1]);
//Give an Error
// Few Other Types: 
let a;
let b;
let c;
let d;
let e;
let f;
function multiply(n, ...m) {
    return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const ans = multiply(10, 1, 2, 3, 4);
// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [8, 5];
// const angle = Math.atan2(...args);
// Inferred as 2-length tuple
const args1 = [8, 5];
// OK
const angle = Math.atan2(...args1);
const f1 = () => {
    return true;
};
const f2 = () => true;
const f3 = function () {
    return true;
};
function f4() {
    // @ts-expect-error
    return true;
}
const f5 = function () {
    // @ts-expect-error
    return true;
};
